import React from "react";
import { seoDescriptions } from "@/data/seo-descriptions";
import LegalPageLayout from "@/components/terms/legal-page-layout";
import ReturnPolicyArea from "@/components/terms/return-policy-area";

const ReturnPolicyPage = () => {
  return (
    <LegalPageLayout
      pageTitle="Refund Policy"
      description={seoDescriptions["return-policy"]}
      breadcrumbLabel="Refund Policy"
      lead="Our return, exchange, and refund guidelines for your peace of mind."
    >
      <ReturnPolicyArea />
    </LegalPageLayout>
  );
};

export default ReturnPolicyPage;
