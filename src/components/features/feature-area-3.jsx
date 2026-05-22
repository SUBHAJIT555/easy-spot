import React from "react";
import { Delivery, Discount, Support } from "@/svg";
import { MotionReveal } from "@/components/motion";
import { siteInfo } from "@/data/contact-info";

const stats = [
  {
    value: "10+",
    label: "Categories",
    detail: "Electronics, fashion, stationery and more in one place",
    icon: Support,
  },
  {
    value: "500+",
    label: "Products",
    detail: "Curated essentials picked for quality and value",
    icon: Discount,
  },
  {
    value: "Pan-India",
    label: "Delivery",
    detail: "Reliable shipping with free delivery over ₹570",
    icon: Delivery,
  },
];

const FeatureAreaThree = () => {
  return (
    <section className="es-features" aria-labelledby="es-features-heading">
      <div className="es-features__inner">
        <header className="es-features__head">
          <p className="es-features__eyebrow">
            <span className="es-features__eyebrow-mark" aria-hidden="true" />
            Why shop with us
          </p>
          <h2 id="es-features-heading" className="es-features__title">
            Built for everyday shopping
          </h2>
          <p className="es-features__sub">
            Everything you need from {siteInfo.companyName} — simple, trusted,
            and designed for modern life.
          </p>
        </header>

        <ul className="es-features__list">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="es-features__item">
                <MotionReveal
                  variant="fade-up"
                  delay={index * 80}
                  className="es-features__card"
                >
                  <span className="es-features__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="es-features__value">{item.value}</span>
                  <span className="es-features__label">{item.label}</span>
                  <p className="es-features__detail">{item.detail}</p>
                </MotionReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeatureAreaThree;
