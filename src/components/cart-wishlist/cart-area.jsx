import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/features/cartSlice";
import useCartInfo from "@/hooks/use-cart-info";
import CartCheckout from "./cart-checkout";
import CartItem from "./cart-item";
import RenderCartProgress from "../common/render-cart-progress";

const CartArea = () => {
  const { cart_products } = useSelector((state) => state.cart);
  const { quantity } = useCartInfo();
  const dispatch = useDispatch();

  return (
    <section className="es-cart">
      <div className="es-cart__inner">
        {cart_products.length === 0 ? (
          <div className="es-cart__empty">
            <div className="es-cart__empty-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6h15l-1.5 9h-12L6 6z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L5 3H2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </div>
            <h2 className="es-cart__empty-title">Your cart is empty</h2>
            <p className="es-cart__empty-text">
              Add items from the shop to see them here.
            </p>
            <Link href="/shop" className="es-cart__btn es-cart__btn--primary">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="es-cart__layout">
            <div className="es-cart__main">
              <div className="es-cart__panel">
                <div className="es-cart__panel-head">
                  <h2 className="es-cart__panel-title">
                    Cart items
                    <span className="es-cart__panel-count">({quantity})</span>
                  </h2>
                </div>

                <div className="es-cart__shipping">
                  <RenderCartProgress />
                </div>

                <div className="es-cart__table">
                  <div className="es-cart__table-head" aria-hidden="true">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span />
                  </div>
                  <ul className="es-cart__list">
                    {cart_products.map((item) => (
                      <CartItem key={item._id} product={item} />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="es-cart__toolbar">
                <Link href="/shop" className="es-cart__back-link">
                  ← Continue shopping
                </Link>
                <button
                  type="button"
                  className="es-cart__clear-btn"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear cart
                </button>
              </div>
            </div>

            <aside className="es-cart__aside">
              <CartCheckout />
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartArea;
