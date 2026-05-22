import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import ShopArea from "@/components/shop/shop-area";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import ErrorMsg from "@/components/common/error-msg";
import FooterTwo from "@/layout/footers/footer-2";
import ShopFilterOffCanvas from "@/components/common/shop-filter-offcanvas";
import ShopLoader from "@/components/loader/shop/shop-loader";
import useDebounce from "@/hooks/use-debounce";
import { PAGE_HERO_GRID_STYLE } from "@/lib/page-hero-grid-style";

const ShopPage = () => {
  const router = useRouter();
  const query = router.query;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const {
    data: products,
    isError,
    isLoading,
  } = useGetAllProductsQuery(undefined, { skip: !mounted });

  const [priceValue, setPriceValue] = useState([0, 0]);
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const priceInitializedRef = useRef(false);

  const debouncedPriceValue = useDebounce(priceValue, 500);

  useEffect(() => {
    if (
      !isLoading &&
      !isError &&
      products?.data?.length > 0 &&
      !priceInitializedRef.current
    ) {
      const calculatedMaxPrice = products.data.reduce((max, product) => {
        return product.price > max ? product.price : max;
      }, 0);
      const maxPrice = Math.min(calculatedMaxPrice, 10000);

      const urlMinPrice = query.minprice ? parseFloat(query.minprice) : 0;
      const urlMaxPrice = query.maxprice
        ? parseFloat(query.maxprice)
        : maxPrice;

      const validMinPrice =
        isNaN(urlMinPrice) || urlMinPrice < 0
          ? 0
          : Math.min(urlMinPrice, maxPrice);
      const validMaxPrice =
        isNaN(urlMaxPrice) || urlMaxPrice <= 0
          ? maxPrice
          : Math.min(urlMaxPrice, maxPrice);

      setPriceValue([validMinPrice, validMaxPrice]);
      priceInitializedRef.current = true;
    }
  }, [isLoading, isError, products, query.minprice, query.maxprice]);

  useEffect(() => {
    if (!mounted || !router.isReady || !priceInitializedRef.current) return;
    const q = router.query;
    const currentMinPrice = q.minprice ? parseFloat(q.minprice) : 0;
    const currentMaxPrice = q.maxprice ? parseFloat(q.maxprice) : 0;

    const minPriceChanged =
      Math.abs(currentMinPrice - debouncedPriceValue[0]) > 0.01;
    const maxPriceChanged =
      Math.abs(currentMaxPrice - debouncedPriceValue[1]) > 0.01;

    if (minPriceChanged || maxPriceChanged) {
      const newQuery = { ...q };
      if (debouncedPriceValue[0] > 0) {
        newQuery.minprice = debouncedPriceValue[0].toString();
      } else {
        delete newQuery.minprice;
      }
      if (debouncedPriceValue[1] > 0 && debouncedPriceValue[1] < 10000) {
        newQuery.maxprice = debouncedPriceValue[1].toString();
      } else {
        delete newQuery.maxprice;
      }
      router.push({ pathname: router.pathname, query: newQuery }, undefined, {
        scroll: false,
        shallow: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPriceValue[0], debouncedPriceValue[1], mounted, router.isReady]);

  const handleChanges = useCallback((val) => {
    setCurrPage(1);
    setPriceValue(val);
  }, []);

  const selectHandleFilter = useCallback((e) => {
    setSelectValue(e.value);
  }, []);

  const otherProps = useMemo(
    () => ({
      priceFilterValues: { priceValue, handleChanges },
      selectHandleFilter,
      currPage,
      setCurrPage,
    }),
    [priceValue, handleChanges, selectHandleFilter, currPage],
  );

  const productItemsFiltered = useMemo(() => {
    if (!products?.data || products.data.length === 0) return [];
    let list = products.data;
    if (selectValue === "Low to High") {
      list = list.slice().sort((a, b) => Number(a.price) - Number(b.price));
    } else if (selectValue === "High to Low") {
      list = list.slice().sort((a, b) => Number(b.price) - Number(a.price));
    } else if (selectValue === "New Added") {
      list = list
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (selectValue === "On Sale") {
      list = list.filter((p) => p.discount > 0);
    }
    const minPrice =
      debouncedPriceValue[0] > 0
        ? debouncedPriceValue[0]
        : query.minprice
          ? parseFloat(query.minprice)
          : 0;
    const maxPrice =
      debouncedPriceValue[1] > 0
        ? debouncedPriceValue[1]
        : query.maxprice
          ? parseFloat(query.maxprice)
          : 0;
    if (maxPrice > 0) {
      list = list.filter((p) => p.price >= minPrice && p.price <= maxPrice);
    }
    if (query.status === "on-sale") {
      list = list.filter((p) => p.discount > 0);
    } else if (query.status === "in-stock") {
      list = list.filter((p) => p.status === "in-stock");
    }
    if (query.category) {
      const decodedCategory = decodeURIComponent(query.category);
      list = list.filter((p) => {
        if (
          p.category?.slug &&
          (p.category.slug === decodedCategory ||
            p.category.slug === query.category)
        )
          return true;
        if (p.parent) {
          const parentSlug = p.parent
            .toLowerCase()
            .replace(/'/g, "")
            .replace("&", "")
            .split(" ")
            .join("-");
          if (parentSlug === decodedCategory || parentSlug === query.category)
            return true;
        }
        if (p.category?.name) {
          const nameSlug = p.category.name
            .toLowerCase()
            .replace(/'/g, "")
            .replace("&", "")
            .split(" ")
            .join("-");
          if (nameSlug === decodedCategory || nameSlug === query.category)
            return true;
        }
        return false;
      });
    }
    if (query.subCategory) {
      list = list.filter(
        (p) =>
          p.children &&
          p.children.toLowerCase().replace("&", "").split(" ").join("-") ===
            query.subCategory,
      );
    }
    if (query.color) {
      list = list.filter((product) => {
        if (!product.imageURLs) return false;
        for (let i = 0; i < product.imageURLs.length; i++) {
          const color = product.imageURLs[i]?.color;
          if (
            color &&
            color?.name?.toLowerCase().replace("&", "").split(" ").join("-") ===
              query.color
          )
            return true;
        }
        return false;
      });
    }
    if (query.brand) {
      list = list.filter(
        (p) =>
          p.brand?.name &&
          p.brand.name.toLowerCase().replace("&", "").split(" ").join("-") ===
            query.brand,
      );
    }
    return list;
  }, [
    products?.data,
    selectValue,
    debouncedPriceValue,
    query.minprice,
    query.maxprice,
    query.status,
    query.category,
    query.subCategory,
    query.color,
    query.brand,
  ]);

  let content = null;
  if (isLoading) {
    content = <ShopLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = (
      <div className="es-shop-page__status">
        <ErrorMsg msg="There was an error" />
      </div>
    );
  }
  if (
    !isLoading &&
    !isError &&
    (!products?.data || products.data.length === 0)
  ) {
    content = (
      <div className="es-shop-page__status">
        <ErrorMsg msg="No Products found!" />
      </div>
    );
  }
  const hasProducts =
    !isLoading && !isError && products?.data && products.data.length > 0;

  if (hasProducts) {
    content = (
      <ShopArea
        all_products={products.data}
        products={productItemsFiltered}
        otherProps={otherProps}
      />
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Shop" description={seoDescriptions.shop} />
      <div className="es-shop-page__top">
        <div className="es-shop-page__top-canvas" aria-hidden="true">
          <div className="es-shop-page__top-grid" style={PAGE_HERO_GRID_STYLE} />
        </div>
        <div className="es-shop-page__top-inner">
          <HeaderThree />
          <section className="es-shop-page__hero">
            <div className="es-shop-page__hero-inner">
              <nav className="es-shop-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Shop</span>
              </nav>
              <p className="es-shop-page__eyebrow">
                <span className="es-shop-page__eyebrow-mark" aria-hidden="true" />
                Full catalog
              </p>
              <h1 className="es-shop-page__title">Shop</h1>
              <p className="es-shop-page__lead">
                Browse our full collection, filter by category or price, and find
                what you need.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="es-shop-page__body">{content}</div>
      {hasProducts && (
        <ShopFilterOffCanvas
          all_products={products.data}
          otherProps={otherProps}
        />
      )}
      <FooterTwo />
    </Wrapper>
  );
};

export default ShopPage;
