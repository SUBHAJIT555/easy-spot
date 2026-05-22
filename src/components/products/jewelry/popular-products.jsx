import React from "react";
import Link from "next/link";
import { useGetPopularProductByTypeQuery } from "@/redux/features/productApi";
import ProductSliderItem from "./product-slider-item";
import ErrorMsg from "@/components/common/error-msg";
import { HomeTwoPopularPrdLoader } from "@/components/loader";
import { siteInfo } from "@/data/contact-info";
import { useDragScroll } from "@/hooks/use-drag-scroll";

const DRAG_IGNORE_SELECTOR =
  ".es-product-card__wishlist, .es-product-card__buy, .es-product-card__image-btn, .es-product-card__title-btn";

const PopularProducts = () => {
  const { data: products, isError, isLoading } =
    useGetPopularProductByTypeQuery("jewelry");

  const { trackRef, suppressClickRef, trackProps } = useDragScroll({
    ignoreSelector: DRAG_IGNORE_SELECTOR,
  });

  let content = null;

  if (isLoading) {
    content = (
      <div className="scs-popular__state">
        <HomeTwoPopularPrdLoader loading={isLoading} />
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
    content = (
      <div
        ref={trackRef}
        className="scs-popular__track"
        role="list"
        {...trackProps}
      >
        {products.data.map((item) => (
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
    <section className="scs-popular" aria-labelledby="scs-popular-heading">
      <div className="scs-popular__inner">
        <header className="scs-popular__head">
          <div className="scs-popular__intro">
            <p className="scs-popular__eyebrow">
              <span className="scs-popular__eyebrow-mark" aria-hidden="true" />
              Trending now
            </p>
            <h2 id="scs-popular-heading" className="scs-popular__title">
              Popular picks
            </h2>
            <p className="scs-popular__sub">
              Customer favourites from {siteInfo.companyName} — drag to browse
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

export default PopularProducts;
