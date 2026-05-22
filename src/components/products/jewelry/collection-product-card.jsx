import React, { useCallback } from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { notifyError } from "@/utils/toast";

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

const CollectionProductCard = ({ product }) => {
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
    rating,
    reviews,
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

  const brandLabel = brand?.name || category?.name || parent || "Easy Spot";
  const outOfStock = status === "out-of-stock";
  const reviewCount = Array.isArray(reviews) ? reviews.length : Number(reviews) || 0;
  const ratingValue = Number(rating) || 0;
  const showRating = ratingValue > 0 || reviewCount > 0;

  const handleModalClick = useCallback(() => {
    dispatch(handleProductModal({ ...product }));
  }, [dispatch, product]);

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

  const badgeLabel = outOfStock
    ? "Sold out"
    : discountPct > 0
      ? `-${discountPct}%`
      : "Best Seller";

  const formatPrice = (val) =>
    Number(val).toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  return (
    <article
      className={`es-grid-card${outOfStock ? " is-out-of-stock" : ""}${
        isAddedToCart ? " is-in-cart" : ""
      }`}
    >
      <div className="es-grid-card__visual">
        <span className="es-grid-card__brand">{brandLabel}</span>
        <button
          type="button"
          className="es-grid-card__image-btn"
          onClick={handleModalClick}
          aria-label={`View ${title}`}
        >
          <Image
            src={img}
            alt={title}
            width={280}
            height={280}
            sizes="(max-width: 576px) 90vw, (max-width: 991px) 45vw, 280px"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </button>
      </div>

      <div className="es-grid-card__meta">
        <span className="es-grid-card__badge">{badgeLabel}</span>
        <button
          type="button"
          className={`es-grid-card__wishlist${isAddedToWishlist ? " is-active" : ""}`}
          onClick={handleWishlist}
          aria-label={isAddedToWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <HeartIcon filled={isAddedToWishlist} />
        </button>
      </div>

      <h3 className="es-grid-card__title">
        <button
          type="button"
          className="es-grid-card__title-btn"
          onClick={handleModalClick}
        >
          {title}
        </button>
      </h3>

      {showRating && (
        <div className="es-grid-card__rating">
          <Rating
            allowFraction
            size={14}
            initialValue={ratingValue}
            readonly
            fillColor="#f59e0b"
          />
          <span className="es-grid-card__rating-count">
            {reviewCount > 0
              ? `(${reviewCount} ${reviewCount === 1 ? "Review" : "Reviews"})`
              : ratingValue > 0
                ? `(${ratingValue.toFixed(1)})`
                : null}
          </span>
        </div>
      )}

      <div className="es-grid-card__footer">
        <div className="es-grid-card__price-block">
          <span className="es-grid-card__price-label">Price</span>
          <div className="es-grid-card__price-row">
            <span className="es-grid-card__price-current">₹{formatPrice(sellingPrice)}</span>
            {originalPrice && (
              <span className="es-grid-card__price-old">₹{formatPrice(originalPrice)}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          className="es-grid-card__buy"
          onClick={handleBuyNow}
          disabled={outOfStock}
        >
          {outOfStock ? "Out of stock" : isAddedToCart ? "Added" : "Buy Now"}
        </button>
      </div>
    </article>
  );
};

export default CollectionProductCard;
