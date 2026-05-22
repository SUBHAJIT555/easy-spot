import React, { useMemo, memo } from "react";
import Pagination from "@/ui/Pagination";
import CollectionProductCard from "../products/jewelry/collection-product-card";
import CategoryFilter from "./shop-filter/category-filter";
import PriceFilter from "./shop-filter/price-filter";
import TopRatedProducts from "./shop-filter/top-rated-products";
import ShopTopLeft from "./shop-top-left";
import ShopTopRight from "./shop-top-right";
import ResetButton from "./shop-filter/reset-button";

const COUNT_PER_PAGE = 12;

const ShopArea = memo(({ all_products, products, otherProps }) => {
  const { priceFilterValues, selectHandleFilter, currPage, setCurrPage } = otherProps;

  const pageStart = (currPage - 1) * COUNT_PER_PAGE;
  const paginatedProducts = useMemo(
    () => products.slice(pageStart, pageStart + COUNT_PER_PAGE),
    [products, pageStart],
  );
  const showing = paginatedProducts.length;

  const maxPrice = useMemo(() => {
    const calculatedMaxPrice = all_products.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);
    return Math.min(calculatedMaxPrice, 10000);
  }, [all_products]);

  return (
    <section className="es-shop">
      <div className="es-shop__inner">
        <div className="es-shop__layout">
          <aside className="es-shop__sidebar" aria-label="Shop filters">
            <PriceFilter priceFilterValues={priceFilterValues} maxPrice={maxPrice} />
            <CategoryFilter setCurrPage={setCurrPage} />
            <TopRatedProducts />
            <ResetButton />
          </aside>

          <div className="es-shop__main">
            <div className="es-shop__toolbar">
              <ShopTopLeft
                showing={products.length === 0 ? 0 : showing}
                total={products.length}
                pageStart={pageStart}
              />
              <ShopTopRight selectHandleFilter={selectHandleFilter} />
            </div>

            <div className="es-shop__catalog">
              {products.length === 0 ? (
                <p className="es-shop__empty">No products found</p>
              ) : (
                <>
                  <ul className="es-shop__grid">
                    {paginatedProducts.map((item) => (
                      <li key={item._id} className="es-shop__cell">
                        <CollectionProductCard product={item} />
                      </li>
                    ))}
                  </ul>

                  <div className="es-shop__pagination">
                    <Pagination
                      items={products}
                      countOfPage={COUNT_PER_PAGE}
                      currPage={currPage}
                      setCurrPage={setCurrPage}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ShopArea.displayName = "ShopArea";

export default ShopArea;
