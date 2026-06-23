import React, { useCallback } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { notifyError } from "@/utils/toast";
import { siteInfo } from "@/data/contact-info";

function HeartIcon({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const ProductSliderItem = ({ product, suppressClickRef }) => {
  const {
    _id,
    title,
    price,
    discountedPrice,
    img,
    status,
    category,
    parent,
    brand,
  } = product || {};
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();

  const sellingPrice =
    discountedPrice && discountedPrice < price ? discountedPrice : price;
  const originalPrice =
    discountedPrice && discountedPrice < price ? price : null;
  const discountPct =
    originalPrice && originalPrice > 0
      ? Math.round(((originalPrice - sellingPrice) / originalPrice) * 100)
      : null;

  const brandLabel =
    brand?.name || category?.name || parent || siteInfo.companyName;
  const outOfStock = status === "out-of-stock";

  const handleModalClick = useCallback(() => {
    if (suppressClickRef?.current) {
      suppressClickRef.current = false;
      return;
    }
    dispatch(handleProductModal({ ...product }));
  }, [suppressClickRef, dispatch, product]);

  const handleBuyNow = (e) => {
    e.stopPropagation();
    if (outOfStock) {
      notifyError("This product is out of stock");
      return;
    }
    dispatch(add_cart_product(product));
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    dispatch(add_to_wishlist(product));
  };

  const stopDrag = (e) => e.stopPropagation();

  const badgeLabel = outOfStock
    ? "Sold out"
    : discountPct > 0
      ? `-${discountPct}%`
      : "Best Seller";

  return (
    <article
      className={`es-product-card${outOfStock ? " is-out-of-stock" : ""}${
        isAddedToCart ? " is-in-cart" : ""
      }`}
    >
      <div className="es-product-card__visual">
        <button
          type="button"
          className="es-product-card__image-btn"
          onClick={handleModalClick}
          onPointerDown={stopDrag}
          aria-label={`View ${title}`}
        >
          <Image
            src={img}
            alt={title}
            width={280}
            height={280}
            sizes="(max-width: 576px) 85vw, 260px"
            draggable={false}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </button>

        <span className="es-product-card__badge">{badgeLabel}</span>

        <button
          type="button"
          className={`es-product-card__wishlist${isAddedToWishlist ? " is-active" : ""}`}
          onClick={handleWishlist}
          onPointerDown={stopDrag}
          aria-label={isAddedToWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <HeartIcon filled={isAddedToWishlist} />
        </button>
      </div>

      <div className="es-product-card__body">
        <p className="es-product-card__brand">{brandLabel}</p>
        <h3 className="es-product-card__title">
          <button
            type="button"
            className="es-product-card__title-btn"
            onClick={handleModalClick}
            onPointerDown={stopDrag}
          >
            {title}
          </button>
        </h3>
        <div className="es-product-card__price">
          <span className="es-product-card__price-current">
            ₹{Number(sellingPrice).toLocaleString("en-IN", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </span>
          {originalPrice && (
            <span className="es-product-card__price-old">
              ₹{Number(originalPrice).toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        className="es-product-card__buy"
        onClick={handleBuyNow}
        onPointerDown={stopDrag}
        disabled={outOfStock}
      >
        {outOfStock ? "Out of stock" : isAddedToCart ? "Added to cart" : "Buy Now"}
      </button>
    </article>
  );
};

export default ProductSliderItem;
