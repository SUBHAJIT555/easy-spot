import React from "react";
import Image from "next/image";
import about_img from "@assets/img/about/about-1.jpg";
import FeatureAreaThree from "@/components/features/feature-area-3";
import { Delivery, Discount, Support } from "@/svg";
import { siteInfo } from "@/data/contact-info";
import JewelryAbout from "./jewelry-about";

const MISSION_ITEMS = [
  {
    icon: Support,
    title: "Quality First",
    text: "We stock trusted brands and genuine products across tech, fashion, and essentials so you can shop with confidence.",
  },
  {
    icon: Discount,
    title: "Customer Satisfaction",
    text: "Your happiness is our priority. We're committed to smooth orders, quick support, and a hassle-free shopping experience.",
  },
  {
    icon: Delivery,
    title: "Wide Range",
    text: "From mobile accessories and smart gadgets to fashion, books, and stationery—find what you need in one place.",
  },
];

const CHOOSE_ITEMS = [
  {
    title: "Genuine Products",
    text: "We offer authentic tech, fashion, and lifestyle products from trusted brands so you shop with confidence.",
  },
  {
    title: "One-Stop Shop",
    text: "Mobile accessories, smart gadgets, electronics, books, stationery, and fashion—all in one place.",
  },
  {
    title: "Reliable Support",
    text: "We stand behind our products with clear policies and responsive customer support when you need it.",
  },
  {
    title: "Fast & Easy",
    text: "Simple checkout, secure payment options, and delivery so you get your orders without hassle.",
  },
];

const AboutArea = () => {
  return (
    <>
      <JewelryAbout />

      <section className="es-about-mission" aria-labelledby="es-about-mission-heading">
        <div className="es-about-mission__inner">
          <header className="es-about-mission__header">
            <p className="es-about-mission__eyebrow">
              <span className="es-about-mission__eyebrow-mark" aria-hidden="true" />
              {siteInfo.companyName}
            </p>
            <h2 id="es-about-mission-heading" className="es-about-mission__title">
              What we stand for
            </h2>
            <p className="es-about-mission__sub">
              The principles that guide how we source, sell, and support every order.
            </p>
          </header>
          <ul className="es-about-mission__grid">
            {MISSION_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="es-about-mission__card">
                  <span className="es-about-mission__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="es-about-mission__card-body">
                    <h3 className="es-about-mission__card-title">{item.title}</h3>
                    <p className="es-about-mission__card-text">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="es-about-choose" aria-labelledby="es-about-choose-heading">
        <div className="es-about-choose__inner">
          <div className="es-about-choose__grid">
            <div className="es-about-choose__content">
              <header className="es-about-choose__header">
                <p className="es-about-choose__eyebrow">
                  <span className="es-about-choose__eyebrow-mark" aria-hidden="true" />
                  Why choose us
                </p>
                <h2 id="es-about-choose-heading" className="es-about-choose__title">
                  Excellence in every detail
                </h2>
              </header>
              <ul className="es-about-choose__list">
                {CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className="es-about-choose__item">
                    <span className="es-about-choose__check" aria-hidden="true">
                      ✓
                    </span>
                    <div className="es-about-choose__item-body">
                      <h3 className="es-about-choose__item-title">{item.title}</h3>
                      <p className="es-about-choose__item-text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="es-about-choose__media">
              <div className="es-about-choose__frame">
                <Image
                  src={about_img}
                  alt={`${siteInfo.companyName} — quality products and service`}
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureAreaThree />
    </>
  );
};

export default AboutArea;
