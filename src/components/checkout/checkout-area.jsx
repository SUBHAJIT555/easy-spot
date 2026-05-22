import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import CheckoutBillingArea from "./checkout-billing-area";
import CheckoutOrderArea from "./checkout-order-area";
import useCheckoutSubmit from "@/hooks/use-checkout-submit";

const CheckoutArea = () => {
  const checkoutData = useCheckoutSubmit();
  const { handleSubmit, submitHandler, register, errors } = checkoutData;
  const { cart_products } = useSelector((state) => state.cart);

  return (
    <section className="es-checkout">
      <div className="es-checkout__inner">
        {cart_products.length === 0 ? (
          <div className="es-checkout__empty">
            <div className="es-checkout__empty-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6h15l-1.5 9h-12L6 6z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L5 3H2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </div>
            <h2 className="es-checkout__empty-title">No items in cart</h2>
            <p className="es-checkout__empty-text">
              Add products to your cart before requesting a quote.
            </p>
            <Link href="/shop" className="es-checkout__btn es-checkout__btn--primary">
              Return to shop
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit(submitHandler)} className="es-checkout__form">
            <div className="es-checkout__grid">
              <div className="es-checkout__col es-checkout__col--main">
                <CheckoutBillingArea register={register} errors={errors} />
              </div>
              <div className="es-checkout__col es-checkout__col--aside">
                <CheckoutOrderArea checkoutData={checkoutData} />
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CheckoutArea;
