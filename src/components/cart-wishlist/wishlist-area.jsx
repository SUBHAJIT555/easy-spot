import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import WishlistItem from "./wishlist-item";

const WishlistArea = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const count = wishlist.length;

  return (
    <section className="es-wishlist">
      <div className="es-wishlist__inner">
        {count === 0 ? (
          <div className="es-wishlist__empty">
            <div className="es-wishlist__empty-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="es-wishlist__empty-title">No wishlist items yet</h2>
            <p className="es-wishlist__empty-text">
              Save products you love and add them to cart anytime.
            </p>
            <Link href="/shop" className="es-wishlist__btn es-wishlist__btn--primary">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="es-wishlist__panel">
            <div className="es-wishlist__panel-head">
              <h2 className="es-wishlist__panel-title">
                Saved items
                <span className="es-wishlist__panel-count">({count})</span>
              </h2>
            </div>

            <div className="es-wishlist__table">
              <div className="es-wishlist__table-head" aria-hidden="true">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Action</span>
                <span />
              </div>
              <ul className="es-wishlist__list">
                {wishlist.map((item) => (
                  <WishlistItem key={item._id} product={item} />
                ))}
              </ul>
            </div>

            <div className="es-wishlist__footer">
              <Link href="/shop" className="es-wishlist__back-link">
                ← Continue shopping
              </Link>
              <Link href="/cart" className="es-wishlist__btn es-wishlist__btn--primary">
                Go to cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WishlistArea;
