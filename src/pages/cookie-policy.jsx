import React from "react";
import { seoDescriptions } from "@/data/seo-descriptions";
import LegalPageLayout from "@/components/terms/legal-page-layout";
import CookiePolicyArea from "@/components/terms/cookie-policy-area";

const CookiePolicyPage = () => {
  return (
    <LegalPageLayout
      pageTitle="Cookie Policy"
      description={seoDescriptions["cookie-policy"]}
      breadcrumbLabel="Cookie Policy"
      lead="How we use cookies and similar technologies on our website."
    >
      <CookiePolicyArea />
    </LegalPageLayout>
  );
};

export default CookiePolicyPage;
