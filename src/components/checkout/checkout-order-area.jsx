import { useSelector } from "react-redux";
import useCartInfo from "@/hooks/use-cart-info";
import { getSellingPrice } from "@/lib/cart-price";

const CheckoutOrderArea = ({ checkoutData }) => {
  const { submitting, error } = checkoutData;
  const { cart_products } = useSelector((state) => state.cart);
  const { total: cartTotal, quantity } = useCartInfo();

  return (
    <div className="es-checkout__order">
      <h2 className="es-checkout__section-title">Your order</h2>
      <p className="es-checkout__section-sub">
        {quantity} {quantity === 1 ? "item" : "items"} in your cart
      </p>

      <ul className="es-checkout__order-list">
        <li className="es-checkout__order-head">
          <span>Product</span>
          <span>Total</span>
        </li>

        {cart_products.map((item) => {
          const unit = getSellingPrice(item);
          const line = unit * item.orderQuantity;
          return (
            <li key={item._id} className="es-checkout__order-row">
              <p className="es-checkout__order-product">
                {item.title}{" "}
                <span className="es-checkout__order-qty">× {item.orderQuantity}</span>
              </p>
              <span className="es-checkout__order-line">₹{line.toFixed(2)}</span>
            </li>
          );
        })}
      </ul>

      <div className="es-checkout__order-summary">
        <div className="es-checkout__order-subtotal">
          <span>Subtotal</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <div className="es-checkout__order-total">
          <span>Total</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
      </div>

      {error && (
        <div className="es-checkout__error" role="alert">
          {error}
        </div>
      )}

      <div className="es-checkout__submit-wrap">
        <button
          type="submit"
          disabled={submitting}
          className="es-checkout__btn es-checkout__btn--primary es-checkout__btn--block"
        >
          {submitting ? "Sending…" : "Ask for quote"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderArea;
