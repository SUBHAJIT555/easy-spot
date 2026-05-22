import ErrorMsg from "@/components/common/error-msg";
import { useGetProductsByVariantQuery } from "@/redux/features/productApi";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import CollectionProductCard from "./collection-product-card";
import { HomeTwoPrdLoader } from "@/components/loader";
import { siteInfo } from "@/data/contact-info";
import { getSiteNumber } from "@/lib/siteConfig";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ProductArea = ({ defaultCategory = "All Collection" }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultCategory);
  const [categoryCounts, setCategoryCounts] = useState({});

  const variantId = useMemo(() => {
    try {
      const siteNumber = getSiteNumber();
      const mod = siteNumber % 10;
      return mod === 0 ? 10 : mod;
    } catch {
      return 1;
    }
  }, []);

  const { data: productsData, isError, isLoading } = useGetProductsByVariantQuery({
    variantId,
    category: activeTab,
  });

  const variantConfig = productsData?.variantConfig;
  const tabs =
    variantConfig?.tabs || ["All Collection", "Man Wear", "Women Wear", "Kids Wear"];
  const title = variantConfig?.title || "Home, Office & Everyday Essentials";
  const subtitle = variantConfig?.subtitle || "Product Collection";

  useEffect(() => {
    if (productsData?.totalCount !== undefined) {
      setCategoryCounts((prev) => ({
        ...prev,
        [activeTab]: productsData.totalCount,
      }));
    }
  }, [activeTab, productsData?.totalCount]);

  const getCategoryCount = (tab) => {
    return categoryCounts[tab] || (tab === activeTab ? productsData?.totalCount || 0 : 0);
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const handleShowMore = () => {
    if (!variantConfig) return;

    const categoryConfig = variantConfig.categoryMap[activeTab];

    if (activeTab === "All Collection" || !categoryConfig?.slug) {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${categoryConfig.slug}`);
    }
  };

  const titleParts = title.split(" ");
  const titleMain =
    titleParts.length > 3 ? titleParts.slice(0, -2).join(" ") : title;
  const titleAccent =
    titleParts.length > 3 ? titleParts.slice(-2).join(" ") : null;

  let body = null;

  if (isLoading) {
    body = (
      <div className="es-collection__state">
        <HomeTwoPrdLoader loading={isLoading} />
      </div>
    );
  } else if (isError) {
    body = (
      <div className="es-collection__state">
        <ErrorMsg msg="There was an error" />
      </div>
    );
  } else if (!productsData?.data?.length) {
    body = (
      <div className="es-collection__state">
        <ErrorMsg msg="No Products found!" />
      </div>
    );
  } else {
    body = (
      <>
        <ul className="es-collection__grid">
          {productsData.data.map((prd) => (
            <li key={prd._id} className="es-collection__cell">
              <CollectionProductCard product={prd} />
            </li>
          ))}
        </ul>

        <div className="es-collection__footer">
          <button type="button" onClick={handleShowMore} className="es-collection__more">
            Show more
            <ArrowIcon />
          </button>
        </div>
      </>
    );
  }

  return (
    <section className="es-collection" aria-labelledby="es-collection-heading">
      <div className="es-collection__inner">
        <header className="es-collection__head">
          <div className="es-collection__intro">
            <p className="es-collection__eyebrow">
              <span className="es-collection__eyebrow-mark" aria-hidden="true" />
              {subtitle}
            </p>
            <h2 id="es-collection-heading" className="es-collection__title">
              {titleAccent ? (
                <>
                  {titleMain}
                  <span className="es-collection__title-accent">{titleAccent}</span>
                </>
              ) : (
                title
              )}
            </h2>
            <p className="es-collection__desc">
              Browse curated picks in{" "}
              <strong>electronics, stationery, garments and fashion accessories</strong>{" "}
              for your home, office and everyday life on {siteInfo.companyName}.
            </p>
          </div>

          <nav className="es-collection__tabs" aria-label="Product categories">
            <div className="es-collection__tabs-track">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleActiveTab(tab)}
                  className={`es-collection__tab${
                    activeTab === tab ? " is-active" : ""
                  }`}
                >
                  <span className="es-collection__tab-label">
                    {tab.split("-").join(" ")}
                  </span>
                  <span className="es-collection__tab-count">
                    {getCategoryCount(tab)}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        </header>

        {body}
      </div>
    </section>
  );
};

export default ProductArea;
