import React from "react";
import Link from "next/link";
import SEO from "@/components/seo";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import CartArea from "@/components/cart-wishlist/cart-area";
import { seoDescriptions } from "@/data/seo-descriptions";
import { PAGE_HERO_GRID_STYLE } from "@/lib/page-hero-grid-style";

const CartPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Cart" description={seoDescriptions.cart} />
      <div className="es-cart-page__top">
        <div className="es-cart-page__top-canvas" aria-hidden="true">
          <div className="es-cart-page__top-grid" style={PAGE_HERO_GRID_STYLE} />
        </div>
        <div className="es-cart-page__top-inner">
          <HeaderThree />
          <section className="es-cart-page__hero">
            <div className="es-cart-page__hero-inner">
              <nav className="es-cart-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Shopping cart</span>
              </nav>
              <p className="es-cart-page__eyebrow">
                <span className="es-cart-page__eyebrow-mark" aria-hidden="true" />
                Your bag
              </p>
              <h1 className="es-cart-page__title">Shopping cart</h1>
              <p className="es-cart-page__lead">
                Review your items, update quantities, and proceed to checkout when
                you&apos;re ready.
              </p>
            </div>
          </section>
        </div>
      </div>
      <CartArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default CartPage;
