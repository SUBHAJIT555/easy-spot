import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import contactInfo, { siteInfo } from "@/data/contact-info";
import EasySpotLogo from "@/components/brand/easy-spot-logo";
import pay from "@assets/img/footer/footer-pay.png";
import { submitToApi } from "@/lib/submit-api";
import { notifyError, notifySuccess } from "@/utils/toast";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/return-policy" },
];

const bottomLegalLinks = legalLinks.filter((link) =>
  ["/privacy-policy", "/terms-and-conditions"].includes(link.href)
);

const FooterTwo = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email?.trim() ?? "";
    if (!trimmed) return;
    setSubmitting(true);
    const result = await submitToApi({ formType: "newsletter", email: trimmed });
    setSubmitting(false);
    if (result.success) {
      notifySuccess("Subscribed successfully!");
      setEmail("");
    } else {
      notifyError(result.error || "Subscription failed.");
    }
  };

  return (
    <footer className="es-footer">
      <div className="es-footer__frame">
        <form
          className="es-footer__newsletter"
          onSubmit={handleNewsletterSubmit}
          aria-label="Newsletter signup"
        >
          <label className="es-footer__newsletter-field">
            <span className="visually-hidden">Email address</span>
            <input
              type="email"
              className="es-footer__newsletter-input"
              placeholder="[ INSERT EMAIL ]..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={submitting}
            />
          </label>
          <button
            type="submit"
            className="es-footer__newsletter-btn"
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Subscribe"}
          </button>
        </form>

        <div className="es-footer__main">
          <div className="es-footer__brand">
            <Link href="/" className="es-footer__logo">
              <EasySpotLogo variant="dark" />
            </Link>
            <p className="es-footer__brand-text">{siteInfo.tagline}</p>
            <p className="es-footer__brand-domain">{siteInfo.domain}</p>
          </div>

          <nav className="es-footer__col" aria-label="Quick links">
            <h3 className="es-footer__col-title">Links</h3>
            <ul className="es-footer__col-list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="es-footer__col" aria-label="Legal">
            <h3 className="es-footer__col-title">Legal</h3>
            <ul className="es-footer__col-list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="es-footer__col es-footer__col--contact">
            <h3 className="es-footer__col-title">Contact</h3>
            <ul className="es-footer__col-list es-footer__col-list--contact">
              <li>
                <a href={contactInfo.telLink}>{contactInfo.phone}</a>
              </li>
              <li>
                <a href={contactInfo.mailtoLink}>{contactInfo.email}</a>
              </li>
              <li>
                <a href={contactInfo.mapLink} target="_blank" rel="noreferrer">
                  {contactInfo.addressDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="es-footer__bar">
          <div className="es-footer__bar-cell es-footer__bar-cell--legal">
            <nav aria-label="Footer legal">
              {bottomLegalLinks.map((link, index) => (
                <span key={link.href}>
                  {index > 0 && (
                    <span className="es-footer__bar-sep" aria-hidden="true">
                      {" "}
                      *{" "}
                    </span>
                  )}
                  <Link href={link.href}>{link.label}</Link>
                </span>
              ))}
            </nav>
          </div>

          <div className="es-footer__bar-cell es-footer__bar-cell--meta">
            <span>
              {siteInfo.companyName} · {siteInfo.domain}
            </span>
          </div>

          <div className="es-footer__bar-cell es-footer__bar-cell--copy">
            <p className="es-footer__copyright">
              © {new Date().getFullYear()} {siteInfo.companyName} | All rights
              reserved.
            </p>
            <div className="es-footer__payments">
              <Image
                src={pay}
                alt="Accepted payment methods"
                width={220}
                height={28}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
