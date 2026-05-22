import React from "react";
import Link from "next/link";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import AboutArea from "@/components/about/about-area";
import { siteInfo } from "@/data/contact-info";
import { PAGE_HERO_GRID_STYLE } from "@/lib/page-hero-grid-style";

const AboutPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About Us" description={seoDescriptions.about} />
      <div className="es-about-page__top">
        <div className="es-about-page__top-canvas" aria-hidden="true">
          <div className="es-about-page__top-grid" style={PAGE_HERO_GRID_STYLE} />
        </div>
        <div className="es-about-page__top-inner">
          <HeaderThree />
          <section className="es-about-page__hero">
            <div className="es-about-page__hero-inner">
              <nav className="es-about-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>About Us</span>
              </nav>
              <p className="es-about-page__eyebrow">
                <span className="es-about-page__eyebrow-mark" aria-hidden="true" />
                Our story
              </p>
              <h1 className="es-about-page__title">About us</h1>
              <p className="es-about-page__lead">
                Learn how {siteInfo.companyName} brings quality products, trusted
                brands, and a smooth shopping experience together in one place.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="es-about-page__body">
        <AboutArea />
      </div>
      <FooterTwo />
    </Wrapper>
  );
};

export default AboutPage;
