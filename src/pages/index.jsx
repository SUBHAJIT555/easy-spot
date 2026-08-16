import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import TrueBasketHero from "@/components/banner/true-basket-hero";
import JewelryAbout from "@/components/about/jewelry-about";
import PopularProducts from "@/components/products/jewelry/popular-products";
import ProductArea from "@/components/products/jewelry/product-area";
import BestSellerPrd from "@/components/products/jewelry/best-seller-prd";
import FeatureAreaThree from "@/components/features/feature-area-3";
import FooterTwo from "@/layout/footers/footer-2";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" description={seoDescriptions.home} />
      <HeaderThree />
      <TrueBasketHero />
      <PopularProducts />
      <FeatureAreaThree />
      <JewelryAbout />
      <ProductArea />
      <BestSellerPrd />
      <FooterTwo />
    </Wrapper>
  );
}
