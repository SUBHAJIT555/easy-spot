import Head from "next/head";
import { siteInfo } from "@/data/contact-info";

const SEO = ({ pageTitle, description }) => (
  <>
    <Head>
      <title>
        {pageTitle
          ? `${pageTitle} - ${siteInfo.companyName}`
          : `${siteInfo.companyName} | ${siteInfo.domain}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={description || siteInfo.tagline} />
      <meta name="application-name" content={siteInfo.companyName} />
      <meta property="og:site_name" content={siteInfo.companyName} />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
    </Head>
  </>
);

export default SEO;
