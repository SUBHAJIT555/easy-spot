import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";
import heroImage from "@assets/images/HeroImages/easy-spot-hero.webp";

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
  const { companyName, domain, tagline, hero } = siteInfo;
  const titleLines = (hero?.headline || companyName).split(". ");

  return (
    <section
      className="es-hero es-hero--editorial"
      aria-labelledby="es-hero-heading"
    >
      <div className="es-hero__media" aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="es-hero__img"
        />
        <span className="es-hero__overlay" />
      </div>

      <div className="es-hero__content">
        {hero?.eyebrow && <p className="es-hero__eyebrow">{hero.eyebrow}</p>}
        <h1 id="es-hero-heading" className="es-hero__title">
          {titleLines.length > 1 ? (
            <>
              {titleLines[0]}.
              <br />
              {titleLines.slice(1).join(". ")}
            </>
          ) : (
            hero?.headline || companyName
          )}
        </h1>

        <div className="es-hero__bar">
          <div className="es-hero__aside">
            <p className="es-hero__aside-title">{companyName}</p>
            <p className="es-hero__aside-text">
              {hero?.subtitle || tagline}
            </p>
            <p className="es-hero__aside-meta">
              Free shipping on orders over ₹570 · {domain}
            </p>
          </div>

          <div className="es-hero__cta">
            <p className="es-hero__cta-text">{tagline}</p>
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
