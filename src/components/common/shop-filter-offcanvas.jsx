import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryFilter from "../shop/shop-filter/category-filter";
import PriceFilter from "../shop/shop-filter/price-filter";
import TopRatedProducts from "../shop/shop-filter/top-rated-products";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";
import ResetButton from "../shop/shop-filter/reset-button";

const ShopFilterOffCanvas = ({
  all_products,
  otherProps,
  right_side = false,
}) => {
  const { priceFilterValues, setCurrPage } = otherProps;
  const { filterSidebar } = useSelector((state) => state.shopFilter);
  const dispatch = useDispatch();

  const calculatedMaxPrice = all_products.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  const maxPrice = Math.min(calculatedMaxPrice, 10000);

  return (
    <>
      <div
        className={`es-shop-offcanvas tp-filter-offcanvas-area${
          filterSidebar ? " is-open offcanvas-opened" : ""
        }`}
        aria-hidden={!filterSidebar}
      >
        <div className="es-shop-offcanvas__wrapper tp-filter-offcanvas-wrapper">
          <header className="es-shop-offcanvas__header">
            <h2 className="es-shop-offcanvas__title">Filters</h2>
            <button
              type="button"
              onClick={() => dispatch(handleFilterSidebarClose())}
              className="es-shop-offcanvas__close"
              aria-label="Close filters"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
              Close
            </button>
          </header>
          <div className="es-shop-offcanvas__body es-shop__sidebar">
            <PriceFilter priceFilterValues={priceFilterValues} maxPrice={maxPrice} />
            <CategoryFilter setCurrPage={setCurrPage} shop_right={right_side} />
            <div className="es-shop-offcanvas__extras">
              <TopRatedProducts />
            </div>
            <ResetButton shop_right={right_side} />
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`es-shop-offcanvas__overlay body-overlay${
          filterSidebar ? " opened" : ""
        }`}
        onClick={() => dispatch(handleFilterSidebarClose())}
        aria-label="Close filters overlay"
      />
    </>
  );
};

export default ShopFilterOffCanvas;
