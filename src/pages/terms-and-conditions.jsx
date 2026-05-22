import React from "react";
import { seoDescriptions } from "@/data/seo-descriptions";
import LegalPageLayout from "@/components/terms/legal-page-layout";
import TermsArea from "@/components/terms/terms-area";

const TermsAndConditionsPage = () => {
  return (
    <LegalPageLayout
      pageTitle="Terms and Conditions"
      description={seoDescriptions["terms-and-conditions"]}
      breadcrumbLabel="Terms and Conditions"
      lead="The terms that govern your use of our website and services."
    >
      <TermsArea />
    </LegalPageLayout>
  );
};

export default TermsAndConditionsPage;
