import React from "react";
import Link from "next/link";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import CheckoutArea from "@/components/checkout/checkout-area";
import { PAGE_HERO_GRID_STYLE } from "@/lib/page-hero-grid-style";

const CheckoutPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Checkout" description={seoDescriptions.checkout} />
      <div className="es-checkout-page__top">
        <div className="es-checkout-page__top-canvas" aria-hidden="true">
          <div className="es-checkout-page__top-grid" style={PAGE_HERO_GRID_STYLE} />
        </div>
        <div className="es-checkout-page__top-inner">
          <HeaderThree />
          <section className="es-checkout-page__hero">
            <div className="es-checkout-page__hero-inner">
              <nav className="es-checkout-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Checkout</span>
              </nav>
              <p className="es-checkout-page__eyebrow">
                <span className="es-checkout-page__eyebrow-mark" aria-hidden="true" />
                Secure checkout
              </p>
              <h1 className="es-checkout-page__title">Checkout</h1>
              <p className="es-checkout-page__lead">
                Enter your details and review your order before requesting a quote.
              </p>
            </div>
          </section>
        </div>
      </div>
      <CheckoutArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default CheckoutPage;
