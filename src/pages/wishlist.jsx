import React from "react";
import Link from "next/link";
import SEO from "@/components/seo";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import WishlistArea from "@/components/cart-wishlist/wishlist-area";
import { seoDescriptions } from "@/data/seo-descriptions";
import { PAGE_HERO_GRID_STYLE } from "@/lib/page-hero-grid-style";

const WishlistPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Wishlist" description={seoDescriptions.wishlist} />
      <div className="es-wishlist-page__top">
        <div className="es-wishlist-page__top-canvas" aria-hidden="true">
          <div className="es-wishlist-page__top-grid" style={PAGE_HERO_GRID_STYLE} />
        </div>
        <div className="es-wishlist-page__top-inner">
          <HeaderThree />
          <section className="es-wishlist-page__hero">
            <div className="es-wishlist-page__hero-inner">
              <nav className="es-wishlist-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Wishlist</span>
              </nav>
              <p className="es-wishlist-page__eyebrow">
                <span className="es-wishlist-page__eyebrow-mark" aria-hidden="true" />
                Saved for later
              </p>
              <h1 className="es-wishlist-page__title">Wishlist</h1>
              <p className="es-wishlist-page__lead">
                Save your favourite products here and add them to your cart when
                you&apos;re ready to buy.
              </p>
            </div>
          </section>
        </div>
      </div>
      <WishlistArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default WishlistPage;
