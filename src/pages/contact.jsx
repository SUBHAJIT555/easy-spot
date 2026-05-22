import React from "react";
import Link from "next/link";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import Wrapper from "@/layout/wrapper";
import FooterTwo from "@/layout/footers/footer-2";
import ContactArea from "@/components/contact/contact-area";
import ContactMap from "@/components/contact/contact-map";
import { PAGE_HERO_GRID_STYLE } from "@/lib/page-hero-grid-style";

const ContactPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Contact" description={seoDescriptions.contact} />
      <div className="es-contact-page__top">
        <div className="es-contact-page__top-canvas" aria-hidden="true">
          <div className="es-contact-page__top-grid" style={PAGE_HERO_GRID_STYLE} />
        </div>
        <div className="es-contact-page__top-inner">
          <HeaderThree />
          <section className="es-contact-page__hero">
            <div className="es-contact-page__hero-inner">
              <nav className="es-contact-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Contact</span>
              </nav>
              <p className="es-contact-page__eyebrow">
                <span className="es-contact-page__eyebrow-mark" aria-hidden="true" />
                We&apos;re here to help
              </p>
              <h1 className="es-contact-page__title">Contact us</h1>
              <p className="es-contact-page__lead">
                Questions about orders, products, or delivery? We&apos;re here to help.
              </p>
            </div>
          </section>
        </div>
      </div>
      <ContactArea />
      <ContactMap />
      <FooterTwo />
    </Wrapper>
  );
};

export default ContactPage;
