import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Minus, Plus } from "@/svg";
import {
  add_cart_product,
  quantityDecrement,
  remove_product,
} from "@/redux/features/cartSlice";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { getSellingPrice } from "@/lib/cart-price";

const CartItem = ({ product }) => {
  const { _id, img, title, orderQuantity = 0 } = product || {};
  const dispatch = useDispatch();
  const unitPrice = getSellingPrice(product);
  const lineTotal = unitPrice * orderQuantity;

  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };

  const handleDecrement = (prd) => {
    dispatch(quantityDecrement(prd));
  };

  const handleRemovePrd = (prd) => {
    dispatch(remove_product(prd));
  };

  const handleOpenModal = () => {
    dispatch(handleProductModal({ ...product }));
  };

  return (
    <li className="es-cart__item">
      <div className="es-cart__product">
        <button
          type="button"
          className="es-cart__thumb"
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
        <div className="es-cart__product-info">
          <button
            type="button"
            className="es-cart__name"
            onClick={handleOpenModal}
          >
            {title}
          </button>
          <p className="es-cart__unit-price">₹{unitPrice.toFixed(2)} each</p>
        </div>
      </div>

      <div className="es-cart__line-price">
        <span className="es-cart__line-price-value">₹{lineTotal.toFixed(2)}</span>
      </div>

      <div className="es-cart__quantity">
        <div className="es-cart__qty-control">
          <button
            type="button"
            className="es-cart__qty-btn"
            onClick={() => handleDecrement(product)}
            aria-label="Decrease quantity"
          >
            <Minus />
          </button>
          <span className="es-cart__qty-value">{orderQuantity}</span>
          <button
            type="button"
            className="es-cart__qty-btn"
            onClick={() => handleAddProduct(product)}
            aria-label="Increase quantity"
          >
            <Plus />
          </button>
        </div>
      </div>

      <div className="es-cart__remove-wrap">
        <button
          type="button"
          className="es-cart__remove"
          onClick={() => handleRemovePrd({ title, id: _id })}
          aria-label={`Remove ${title}`}
        >
          ×
        </button>
      </div>
    </li>
  );
};

export default CartItem;
