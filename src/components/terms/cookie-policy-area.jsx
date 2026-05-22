import React from 'react';
import Link from 'next/link';
import contactInfo, { siteInfo } from '@/data/contact-info';

const CookiePolicyArea = () => {
  return (
    <>
      <section className="es-legal">
        <div className="es-legal__inner">
          <article className="es-legal__document">
            <div className="es-legal__content">
                  <p className="es-legal__updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="es-legal__intro">
                    This Cookie Policy explains how {siteInfo.companyName} ({siteInfo.domain}) uses cookies and similar technologies on this website. By using our site, you consent to the use of cookies as described below.
                  </p>

                  <div className="es-legal__section mb-50">
                    <h3>1. What Are Cookies</h3>
                    <p>
                      Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, improve performance, and understand how you use the site.
                    </p>
                  </div>

                  <div className="es-legal__section mb-50">
                    <h3>2. How We Use Cookies</h3>
                    <p>
                      We use cookies to: remember items in your cart, keep your preferences (e.g. language), analyze site traffic and usage, and improve security and site functionality.
                    </p>
                  </div>

                  <div className="es-legal__section mb-50">
                    <h3>3. Types of Cookies We Use</h3>
                    <ul className="es-legal__list mb-15">
                      <li><strong>Strictly necessary:</strong> Required for the site to work (e.g. cart, security).</li>
                      <li><strong>Functional:</strong> Remember your choices and preferences.</li>
                      <li><strong>Analytics:</strong> Help us understand how visitors use our site.</li>
                    </ul>
                  </div>

                  <div className="es-legal__section mb-50">
                    <h3>4. Managing Cookies</h3>
                    <p>
                      You can control or delete cookies through your browser settings. Disabling certain cookies may affect site functionality, such as keeping items in your cart.
                    </p>
                  </div>

                  <div className="es-legal__section mb-50">
                    <h3>5. Contact</h3>
                    <p>
                      For questions about our use of cookies, contact us at <a href={contactInfo.mailtoLink}>{contactInfo.email}</a>, call <a href={contactInfo.telLink}>{contactInfo.phone}</a>, or visit our <Link href="/contact">contact page</Link>.
                    </p>
                  </div>

                  <div className="es-legal__footer-note mt-60 pt-40">
                    <p>
                      By continuing to use {siteInfo.domain}, you agree to this Cookie Policy.
                    </p>
                  </div>
                            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default CookiePolicyArea;
