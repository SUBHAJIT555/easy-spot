import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SEO from "@/components/seo";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import { PAGE_HERO_GRID_STYLE } from "@/lib/page-hero-grid-style";

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/return-policy", label: "Refund Policy" },
];

const LegalPageLayout = ({
  pageTitle,
  description,
  breadcrumbLabel,
  lead,
  children,
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <SEO pageTitle={pageTitle} description={description} />
      <div className="es-legal-page__top">
        <div className="es-legal-page__top-canvas" aria-hidden="true">
          <div className="es-legal-page__top-grid" style={PAGE_HERO_GRID_STYLE} />
        </div>
        <div className="es-legal-page__top-inner">
          <HeaderThree />
          <section className="es-legal-page__hero">
            <div className="es-legal-page__hero-inner">
              <nav className="es-legal-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>{breadcrumbLabel}</span>
              </nav>
              <p className="es-legal-page__eyebrow">
                <span className="es-legal-page__eyebrow-mark" aria-hidden="true" />
                Legal information
              </p>
              <h1 className="es-legal-page__title">{pageTitle}</h1>
              {lead ? <p className="es-legal-page__lead">{lead}</p> : null}
            </div>
          </section>
        </div>
      </div>
      <div className="es-legal-page__body">
        <div className="es-legal-page__shell">
          <nav className="es-legal__nav" aria-label="Legal policies">
            <ul className="es-legal__nav-list">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`es-legal__nav-link${
                      router.pathname === link.href ? " is-active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {children}
        </div>
      </div>
      <FooterTwo />
    </Wrapper>
  );
};

export default LegalPageLayout;
