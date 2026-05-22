# Multi-brand theme system

Each e-commerce site shares the same functionality; only the visual layer changes per brand.

## Quick start (Easy Spot)

```bash
# .env.local
NEXT_PUBLIC_SITE_THEME=easy-spot
```

Rebuild after changing theme. SCSS site colors must match: edit `public/assets/scss/theme/_active-site.scss` `@forward` to the same site id.

## Add a new brand

1. Copy `src/theme/sites/easy-spot.js` → `src/theme/sites/<brand-id>.js`
2. Copy `public/assets/scss/theme/sites/_easy-spot.scss` → `_<brand-id>.scss`
3. Register in `src/theme/index.js`
4. Set `@forward` in `public/assets/scss/theme/_active-site.scss`
5. Set `NEXT_PUBLIC_SITE_THEME=<brand-id>`

## Token layers

| Layer | Purpose |
|-------|---------|
| `src/theme/sites/*.js` | Single source for JS (Tailwind, loaders, toasts, ThemeProvider) |
| `ThemeProvider` | Injects `--site-*` CSS variables at runtime |
| `public/assets/scss/theme/sites/_*.scss` | Legacy Shofy `--tp-*` variables |
| `src/styles/design-system/` | Cross-brand UI (buttons, cards, nav, motion) |

## Customize per brand (JS tokens)

- **colors** — palette
- **fonts** — body + heading stacks
- **spacing** — section padding, container width
- **radius** / **shadows** — cards and panels
- **buttons** / **cards** / **navbar** / **footer** — component-specific tokens
- **motion** — duration and easing
- **toastClass** — e.g. `es-toast`

## Motion (component-by-component)

Wrap sections without changing logic:

```jsx
import { MotionReveal } from "@/components/motion";

<MotionReveal variant="fade-up">
  <YourSection />
</MotionReveal>
```

- Default: CSS + `IntersectionObserver` (performant)
- Optional: `engine="gsap"` (install `gsap` first)

Utility classes: `site-hover-lift`, `site-link-underline`, `site-section`, `site-container`.

## Component redesign workflow

1. Change tokens in `src/theme/sites/<brand>.js` for global shifts
2. Override section SCSS using `var(--site-*)` only
3. Use `MotionReveal` for entrance animations
4. Do not modify Redux, API, or checkout logic
