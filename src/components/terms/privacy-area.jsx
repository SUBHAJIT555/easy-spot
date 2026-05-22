import React from 'react';
import contactInfo, { siteInfo } from '@/data/contact-info';

const PrivacyArea = () => {
  return (
    <>
      {/* privacy policy section start */}
      <section className="es-legal">
        <div className="es-legal__inner">
          <article className="es-legal__document">
            <div className="es-legal__content">
                  <p className="es-legal__updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="es-legal__intro">
                    We at {siteInfo.companyName} ({siteInfo.domain}) are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website.
                  </p>

                  {/* Section 1 */}
                  <div className="es-legal__section mb-50">
                    <h3>1. Information We Collect</h3>
                    <p>
                      We may collect information that you provide directly to us, including:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>Name, email address, phone number, and mailing address when you create an account or place an order</li>
                      <li>Payment and billing information (processed securely through our payment providers)</li>
                      <li>Communications and correspondence when you contact us or subscribe to our newsletter</li>
                      <li>Preferences, wishlists, and order history</li>
                    </ul>
                    <p>
                      We also automatically collect certain information when you visit our website, such as IP address, browser type, device information, and usage data through cookies and similar technologies.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="es-legal__section mb-50">
                    <h3>2. How We Use Your Information</h3>
                    <p>
                      We use the information we collect to:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>Process and fulfill your orders and send order confirmations and shipping updates</li>
                      <li>Manage your account and provide customer support</li>
                      <li>Send you marketing communications (with your consent) about new products, offers, and updates</li>
                      <li>Improve our website, products, and services based on usage and feedback</li>
                      <li>Prevent fraud, comply with legal obligations, and protect our rights and the rights of others</li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="es-legal__section mb-50">
                    <h3>3. Cookies and Tracking Technologies</h3>
                    <p>
                      We use cookies and similar technologies to enhance your experience, remember your preferences, analyze site traffic, and personalize content. You can control cookie settings through your browser. Disabling certain cookies may affect the functionality of our website.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="es-legal__section mb-50">
                    <h3>4. Sharing Your Information</h3>
                    <p>
                      We do not sell your personal information. We may share your information with:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>Service providers who assist us with payment processing, shipping, email delivery, and analytics (under strict confidentiality agreements)</li>
                      <li>Law enforcement or regulatory authorities when required by law or to protect our rights</li>
                      <li>Business partners in connection with a merger, acquisition, or sale of assets (with notice to you)</li>
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div className="es-legal__section mb-50">
                    <h3>5. Data Security</h3>
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Payment data is handled by certified payment processors and is not stored on our servers. Despite our efforts, no method of transmission over the Internet is completely secure.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="es-legal__section mb-50">
                    <h3>6. Your Rights and Choices</h3>
                    <p>
                      Depending on your location, you may have the right to:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>Access, correct, or delete your personal information</li>
                      <li>Opt out of marketing communications at any time (via unsubscribe links or account settings)</li>
                      <li>Object to or restrict certain processing of your data</li>
                      <li>Data portability where applicable</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us using the details below.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="es-legal__section mb-50">
                    <h3>7. Data Retention</h3>
                    <p>
                      We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Account and order data are typically retained for a period consistent with applicable law and business needs.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="es-legal__section mb-50">
                    <h3>8. Children's Privacy</h3>
                    <p>
                      Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us so we can delete it.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div className="es-legal__section mb-50">
                    <h3>9. Changes to This Policy</h3>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="es-legal__section mb-50">
                    <h3>10. Contact Us</h3>
                    <p>
                      If you have questions about this Privacy Policy or our data practices, please contact us at <a href={contactInfo.mailtoLink}>{contactInfo.email}</a>, call <a href={contactInfo.telLink}>{contactInfo.phone}</a>, or write to us at {contactInfo.addressDisplay}. You can also use our contact page.
                    </p>
                  </div>

                  {/* Agreement */}
                  <div className="es-legal__footer-note mt-60 pt-40">
                    <p>
                      By using {siteInfo.domain}, you acknowledge that you have read and understood this Privacy Policy.
                    </p>
                  </div>
                            </div>
          </article>
        </div>
      </section>
      {/* privacy policy section end */}
    </>
  );
};

export default PrivacyArea;
