import React from "react";
import Link from "next/link";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import ProductSliderItem from "./product-slider-item";
import ErrorMsg from "@/components/common/error-msg";
import { HomeTwoBestSellPrdPrdLoader } from "@/components/loader";
import { siteInfo } from "@/data/contact-info";
import { useDragScroll } from "@/hooks/use-drag-scroll";

const DRAG_IGNORE_SELECTOR =
  ".es-product-card__wishlist, .es-product-card__buy, .es-product-card__image-btn, .es-product-card__title-btn";

const BestSellerPrd = () => {
  const { data: products, isError, isLoading } = useGetProductTypeQuery({
    type: "jewelry",
    query: "topSeller=true",
  });

  const { trackRef, suppressClickRef, trackProps } = useDragScroll({
    ignoreSelector: DRAG_IGNORE_SELECTOR,
  });

  let content = null;

  if (isLoading) {
    content = (
      <div className="scs-popular__state">
        <HomeTwoBestSellPrdPrdLoader loading={isLoading} />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="scs-popular__state">
        <ErrorMsg msg="There was an error" />
      </div>
    );
  } else if (!products?.data?.length) {
    content = (
      <div className="scs-popular__state">
        <ErrorMsg msg="No Products found!" />
      </div>
    );
  } else {
    const productItems = products.data.slice(0, 8);

    content = (
      <div
        ref={trackRef}
        className="scs-popular__track"
        role="list"
        {...trackProps}
      >
        {productItems.map((item) => (
          <div key={item._id} className="scs-popular__slide" role="listitem">
            <ProductSliderItem
              product={item}
              suppressClickRef={suppressClickRef}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      className="scs-popular scs-popular--bestseller"
      aria-labelledby="scs-bestseller-heading"
    >
      <div className="scs-popular__inner">
        <header className="scs-popular__head">
          <div className="scs-popular__intro">
            <p className="scs-popular__eyebrow">
              <span className="scs-popular__eyebrow-mark" aria-hidden="true" />
              Customer favorites
            </p>
            <h2 id="scs-bestseller-heading" className="scs-popular__title">
              Top sellers
            </h2>
            <p className="scs-popular__sub">
              Best-selling products from {siteInfo.companyName} — drag to browse
            </p>
          </div>
          <Link href="/shop" className="scs-popular__cta">
            View all products
          </Link>
        </header>

        <div className="scs-popular__slider">{content}</div>
      </div>
    </section>
  );
};

export default BestSellerPrd;
