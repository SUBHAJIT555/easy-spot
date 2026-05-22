import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "@/svg";
import { add_cart_product, quantityDecrement } from "@/redux/features/cartSlice";
import { remove_wishlist_product } from "@/redux/features/wishlist-slice";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { getSellingPrice } from "@/lib/cart-price";

const WishlistItem = ({ product }) => {
  const { _id, img, title } = product || {};
  const unitPrice = getSellingPrice(product);
  const { cart_products } = useSelector((state) => state.cart);
  const cartItem = cart_products.find((item) => item._id === _id);
  const quantity = cartItem?.orderQuantity ?? 0;
  const isInCart = quantity > 0;
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(add_cart_product(product));
  };

  const handleDecrement = () => {
    if (cartItem) {
      dispatch(quantityDecrement(product));
    }
  };

  const handleRemovePrd = () => {
    dispatch(remove_wishlist_product({ title, id: _id }));
  };

  const handleOpenModal = () => {
    dispatch(handleProductModal({ ...product }));
  };

  return (
    <li className="es-wishlist__item">
      <div className="es-wishlist__product">
        <button
          type="button"
          className="es-wishlist__thumb"
          onClick={handleOpenModal}
          aria-label={`View ${title}`}
        >
          <Image
            src={img}
            alt={title}
            width={88}
            height={100}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </button>
        <div className="es-wishlist__product-info">
          <button
            type="button"
            className="es-wishlist__name"
            onClick={handleOpenModal}
          >
            {title}
          </button>
          <p className="es-wishlist__unit-price">₹{unitPrice?.toFixed(2)} each</p>
        </div>
      </div>

      <div className="es-wishlist__line-price">
        <span className="es-wishlist__line-price-value">₹{unitPrice?.toFixed(2)}</span>
      </div>

      <div className="es-wishlist__quantity">
        <div className="es-wishlist__qty-control">
          <button
            type="button"
            className="es-wishlist__qty-btn"
            onClick={handleDecrement}
            aria-label="Decrease quantity"
            disabled={quantity === 0}
          >
            <Minus />
          </button>
          <span className="es-wishlist__qty-value">{quantity}</span>
          <button
            type="button"
            className="es-wishlist__qty-btn"
            onClick={handleAddProduct}
            aria-label="Increase quantity"
          >
            <Plus />
          </button>
        </div>
      </div>

      <div className="es-wishlist__add-wrap">
        <button
          type="button"
          className={`es-wishlist__btn es-wishlist__btn--primary es-wishlist__btn--row${
            isInCart ? " is-in-cart" : ""
          }`}
          onClick={handleAddProduct}
        >
          {isInCart ? "Added" : "Add to cart"}
        </button>
      </div>

      <div className="es-wishlist__remove-wrap">
        <button
          type="button"
          className="es-wishlist__remove"
          onClick={handleRemovePrd}
          aria-label={`Remove ${title}`}
        >
          ×
        </button>
      </div>
    </li>
  );
};

export default WishlistItem;
