import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Close } from "@/svg";
import { handleModalClose } from "@/redux/features/productModalSlice";
import DetailsWrapper from "@/components/product-details/details-wrapper";
import { initialOrderQuantity } from "@/redux/features/cartSlice";

const ProductModal = () => {
  const { productItem, isModalOpen } = useSelector((state) => state.productModal);
  const { img, status, title } = productItem || {};
  const dispatch = useDispatch();
  const isOpen = isModalOpen && Boolean(productItem);

  const stockLabel =
    status === "out-of-stock"
      ? "Out of stock"
      : status === "in-stock"
        ? "In stock"
        : status?.replace(/-/g, " ");

  useEffect(() => {
    if (!isOpen) return undefined;

    dispatch(initialOrderQuantity());
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("es-modal-open");

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        dispatch(handleModalClose());
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("es-modal-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, dispatch]);

  if (typeof window === "undefined" || !isOpen) {
    return null;
  }

  const portalRoot = document.getElementById("root") || document.body;

  return createPortal(
    <>
      <div
        className="es-modal__overlay"
        onClick={() => dispatch(handleModalClose())}
        aria-hidden="true"
      />
      <div
        className="es-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title ? `Quick view: ${title}` : "Product quick view"}
      >
        <div className="es-modal__body">
          <div className="es-modal__gallery">
            <div className="es-modal__image">
              <Image
                src={img || "/assets/img/product/product-1.jpg"}
                alt={title || "Product"}
                width={416}
                height={480}
                priority
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
              {status === "out-of-stock" && (
                <span className="es-modal__stock-badge">{stockLabel}</span>
              )}
            </div>
          </div>

          <div className="es-modal__content">
            <button
              type="button"
              className="es-modal__close"
              onClick={() => dispatch(handleModalClose())}
              aria-label="Close"
            >
              <Close />
            </button>
            <DetailsWrapper productItem={productItem} isModal />
          </div>
        </div>
      </div>
    </>,
    portalRoot
  );
};

export default ProductModal;
