import React, { useState } from "react";
import Link from "next/link";
import useCartInfo from "@/hooks/use-cart-info";

const SHIPPING_OPTIONS = [
  { id: "flat_rate", label: "Flat rate", amount: 20 },
  { id: "local_pickup", label: "Local pickup", amount: 25 },
  { id: "free_shipping", label: "Free shipping", amount: 0 },
];

const CartCheckout = () => {
  const { total, quantity } = useCartInfo();
  const [shippingId, setShippingId] = useState("free_shipping");

  const selectedShipping =
    SHIPPING_OPTIONS.find((opt) => opt.id === shippingId) || SHIPPING_OPTIONS[2];
  const shipCost = selectedShipping.amount;
  const grandTotal = total + shipCost;

  return (
    <div className="es-cart__summary">
      <h2 className="es-cart__summary-title">Order summary</h2>
      <p className="es-cart__summary-meta">
        {quantity} {quantity === 1 ? "item" : "items"} in your cart
      </p>

      <div className="es-cart__summary-rows">
        <div className="es-cart__summary-row">
          <span>Subtotal</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="es-cart__summary-row">
          <span>Shipping</span>
          <span>{shipCost > 0 ? `₹${shipCost.toFixed(2)}` : "Free"}</span>
        </div>
      </div>

      <div className="es-cart__shipping-block">
        <h3 className="es-cart__shipping-title">Delivery method</h3>
        <ul className="es-cart__shipping-list">
          {SHIPPING_OPTIONS.map((opt) => (
            <li key={opt.id}>
              <label
                className={`es-cart__shipping-option${
                  shippingId === opt.id ? " is-selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="shipping"
                  value={opt.id}
                  checked={shippingId === opt.id}
                  onChange={() => setShippingId(opt.id)}
                />
                <span className="es-cart__shipping-option-body">
                  <span className="es-cart__shipping-option-label">{opt.label}</span>
                  <span className="es-cart__shipping-option-price">
                    {opt.amount > 0 ? `₹${opt.amount.toFixed(2)}` : "Free"}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="es-cart__summary-total">
        <span>Total</span>
        <span>₹{grandTotal.toFixed(2)}</span>
      </div>

      <Link
        href="/checkout"
        className="es-cart__btn es-cart__btn--primary es-cart__btn--block"
      >
        Proceed to checkout
      </Link>
      <Link
        href="/shop"
        className="es-cart__btn es-cart__btn--outline es-cart__btn--block"
      >
        Continue shopping
      </Link>
    </div>
  );
};

export default CartCheckout;
