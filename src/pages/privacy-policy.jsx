import React from "react";
import { seoDescriptions } from "@/data/seo-descriptions";
import LegalPageLayout from "@/components/terms/legal-page-layout";
import PrivacyArea from "@/components/terms/privacy-area";

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout
      pageTitle="Privacy Policy"
      description={seoDescriptions["privacy-policy"]}
      breadcrumbLabel="Privacy Policy"
      lead="How we collect, use, and protect your personal information when you shop with us."
    >
      <PrivacyArea />
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;
