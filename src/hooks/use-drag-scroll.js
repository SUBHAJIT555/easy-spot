import { useRef, useCallback } from "react";

/**
 * Horizontal drag-to-scroll for overflow tracks.
 * Uses capture phase so dragging works from images/buttons inside slides.
 */
export function useDragScroll({
  threshold = 8,
  ignoreSelector = "",
} = {}) {
  const trackRef = useRef(null);
  const suppressClickRef = useRef(false);
  const dragState = useRef({
    active: false,
    moved: false,
    captured: false,
    startX: 0,
    scrollLeft: 0,
  });
  const docListenersRef = useRef(null);

  const removeDocListeners = useCallback(() => {
    if (!docListenersRef.current) return;
    const { onMove, onUp } = docListenersRef.current;
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    document.removeEventListener("pointercancel", onUp);
    docListenersRef.current = null;
  }, []);

  const endDrag = useCallback(() => {
    const track = trackRef.current;
    if (track) {
      track.classList.remove("is-dragging");
    }
    dragState.current.active = false;
    removeDocListeners();
  }, [removeDocListeners]);

  const onPointerMove = useCallback(
    (e) => {
      const track = trackRef.current;
      const state = dragState.current;
      if (!track || !state.active) return;

      const delta = e.clientX - state.startX;

      if (Math.abs(delta) > threshold) {
        if (!state.captured) {
          state.captured = true;
          state.moved = true;
          try {
            track.setPointerCapture(e.pointerId);
          } catch {
            /* ignore */
          }
        }
        e.preventDefault();
      }

      if (state.captured) {
        track.scrollLeft = state.scrollLeft - delta;
      }
    },
    [threshold]
  );

  const onPointerUp = useCallback(
    (e) => {
      const state = dragState.current;
      if (state.moved) {
        suppressClickRef.current = true;
      }

      const track = trackRef.current;
      if (track?.hasPointerCapture?.(e.pointerId)) {
        track.releasePointerCapture(e.pointerId);
      }
      state.captured = false;
      endDrag();
    },
    [endDrag]
  );

  const onPointerDownCapture = useCallback(
    (e) => {
      const track = trackRef.current;
      if (!track || e.button !== 0) return;
      if (ignoreSelector && e.target.closest(ignoreSelector)) return;

      removeDocListeners();

      dragState.current = {
        active: true,
        moved: false,
        captured: false,
        startX: e.clientX,
        scrollLeft: track.scrollLeft,
      };
      track.classList.add("is-dragging");

      const onMove = (ev) => onPointerMove(ev);
      const onUp = (ev) => onPointerUp(ev);

      docListenersRef.current = { onMove, onUp };
      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
      document.addEventListener("pointercancel", onUp);
    },
    [ignoreSelector, onPointerMove, onPointerUp, removeDocListeners]
  );

  const trackProps = {
    onPointerDownCapture,
    onLostPointerCapture: endDrag,
  };

  return { trackRef, suppressClickRef, trackProps };
}
