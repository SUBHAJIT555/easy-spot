import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/contact-info";
import { MotionReveal } from "@/components/motion";
import aboutImage from "@assets/images/HeroImages/HomeElectronicsHero.webp";

const highlights = [
  "Mobile & laptop accessories",
  "Smart gadgets & audio",
  "Daily-wear garments",
  "Stationery & office supplies",
  "Fashion jewellery & add-ons",
  "Gifts & everyday picks",
];

const perks = [
  { value: "10+", label: "Categories" },
  { value: "500+", label: "Products" },
  { value: "Pan-India", label: "Delivery" },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const JewelryAbout = () => {
  return (
    <section className="es-about" aria-labelledby="es-about-heading">
      <div className="es-about__inner">
        <div className="es-about__layout">
          <MotionReveal variant="fade-up" className="es-about__media">
            <div className="es-about__visual">
              <Image
                src={aboutImage}
                alt={`About ${siteInfo.companyName}`}
                fill
                sizes="(max-width: 991px) 100vw, 40rem"
                style={{ objectFit: "contain" }}
              />
            </div>
            <ul className="es-about__stats" aria-label="Store highlights">
              {perks.map((perk) => (
                <li key={perk.label} className="es-about__stat">
                  <span className="es-about__stat-value">{perk.value}</span>
                  <span className="es-about__stat-label">{perk.label}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal variant="fade-up" delay={100} className="es-about__copy">
            <p className="es-about__eyebrow">
              <span className="es-about__eyebrow-mark" aria-hidden="true" />
              About {siteInfo.domain}
            </p>

            <h2 id="es-about-heading" className="es-about__title">
              Everything you need,
              <span className="es-about__title-accent">in one place.</span>
            </h2>

            <div className="es-about__prose">
              <p>
                <strong>{siteInfo.companyName}</strong> is your trusted store for
                everyday essentials. From{" "}
                <strong>mobiles, audio, and computer gear</strong> to{" "}
                <strong>notebooks, office supplies, garments</strong>, and{" "}
                <strong>fashion accessories</strong> — curated for quality and
                convenience.
              </p>
              <p>
                Shop electronics, stationery, men&apos;s &amp; women&apos;s wear,
                and more — with reliable delivery across India and free shipping on
                orders over ₹570.
              </p>
            </div>

            <ul className="es-about__list">
              {highlights.map((item) => (
                <li key={item} className="es-about__list-item">
                  <span className="es-about__list-mark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="es-about__actions">
              <Link href="/shop" className="es-about__btn es-about__btn--primary">
                Explore products
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="es-about__btn es-about__btn--ghost">
                Contact us
              </Link>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default JewelryAbout;
