import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";

const HERO_BG =
  "https://images.pexels.com/photos/31496295/pexels-photo-31496295.jpeg";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TrueBasketHero() {
  return (
    <section
      className="es-hero es-hero--editorial"
      aria-labelledby="es-hero-heading"
    >
      <div className="es-hero__media" aria-hidden="true">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="es-hero__img"
        />
        <span className="es-hero__overlay" />
      </div>

      <div className="es-hero__content">
        <h1 id="es-hero-heading" className="es-hero__title">
          Shop confidently.
          <br />
          Curated for you.
        </h1>

        <div className="es-hero__bar">
          <div className="es-hero__aside">
            <p className="es-hero__aside-title">Your everyday marketplace</p>
            <p className="es-hero__aside-text">
              Quality products, simple checkout, and reliable delivery — everything
              you need in one place.
            </p>
            <p className="es-hero__aside-meta">Free shipping on orders over ₹570</p>
          </div>

          <div className="es-hero__cta">
            <p className="es-hero__cta-text">
              {siteInfo.tagline}
            </p>
            <Link href="/shop" className="es-hero__shop-btn">
              <span>Shop Now</span>
              <span className="es-hero__shop-btn-icon">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
