import React from 'react';
import Link from 'next/link';
import contactInfo, { siteInfo } from '@/data/contact-info';

const ReturnPolicyArea = () => {
  return (
    <>
      {/* return policy section start */}
      <section className="es-legal">
        <div className="es-legal__inner">
          <article className="es-legal__document">
            <div className="es-legal__content">
                  <p className="es-legal__updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="es-legal__intro">
                    At {siteInfo.companyName} we want you to be completely satisfied with your purchase. If you are not entirely happy with your order, we offer a straightforward return and refund process. Please read this policy carefully before initiating a return.
                  </p>

                  {/* Section 1 */}
                  <div className="es-legal__section mb-50">
                    <h3>1. Return Eligibility</h3>
                    <p>
                      You may return most items within <strong>30 days</strong> of delivery for a full refund or exchange, provided that:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>The item is unused, unworn, and in the same condition as received (in original packaging where applicable)</li>
                      <li>All tags, certificates, and documentation are included</li>
                      <li>The item is not a customized, personalized, or made-to-order piece (unless defective)</li>
                      <li>You have proof of purchase (order number or receipt)</li>
                    </ul>
                    <p>
                      Items that are damaged, altered, or show signs of wear cannot be accepted for return. We reserve the right to refuse returns that do not meet these conditions.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="es-legal__section mb-50">
                    <h3>2. Non-Returnable Items</h3>
                    <p>
                      The following items generally cannot be returned unless they are defective or we have made an error:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>Custom or engraved jewelry</li>
                      <li>Earrings (for hygiene reasons, unless sealed and unused)</li>
                      <li>Items marked as final sale at the time of purchase</li>
                      <li>Gift cards</li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="es-legal__section mb-50">
                    <h3>3. How to Initiate a Return</h3>
                    <p>
                      To start a return:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>Contact our customer service at <a href={contactInfo.mailtoLink}>{contactInfo.email}</a> or <a href={contactInfo.telLink}>{contactInfo.phone}</a>, or through our <Link href="/contact">contact page</Link>, with your order number and reason for return</li>
                      <li>We will provide you with a Return Authorization (RA) number and return shipping instructions</li>
                      <li>Securely pack the item in its original packaging (or equivalent) and include the RA number inside the package</li>
                      <li>Ship the package to the address we provide using a trackable method. We recommend insuring high-value items</li>
                    </ul>
                    <p>
                      Returns sent without an RA number may experience delays in processing. You are responsible for return shipping costs unless the return is due to our error or a defective product.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="es-legal__section mb-50">
                    <h3>4. Refunds</h3>
                    <p>
                      Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved:
                    </p>
                    <ul className="es-legal__list mb-15">
                      <li>Refunds will be processed to the original payment method within 5–10 business days</li>
                      <li>You will receive the full purchase price (excluding original shipping, unless the return was due to our error)</li>
                      <li>Depending on your bank or card issuer, it may take additional time for the refund to appear on your statement</li>
                    </ul>
                    <p>
                      If your return is not approved, we will contact you and may arrange for the item to be sent back to you at your cost.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="es-legal__section mb-50">
                    <h3>5. Exchanges</h3>
                    <p>
                      If you would like to exchange an item for a different size, style, or product, please follow the return process above and indicate that you want an exchange. We will process the return and, subject to availability, ship the replacement item. Price differences will be charged or refunded as applicable.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="es-legal__section mb-50">
                    <h3>6. Damaged or Defective Items</h3>
                    <p>
                      If you receive a damaged or defective item, please contact us within 7 days of delivery with photos and a description. We will arrange a replacement or full refund at no extra cost to you, including return shipping. Do not discard the original packaging until we have confirmed the resolution.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="es-legal__section mb-50">
                    <h3>7. Lost or Stolen Return Shipments</h3>
                    <p>
                      We are not responsible for return packages lost or stolen in transit. We recommend using a trackable and insured shipping service. Once we receive the returned item, we will process your refund or exchange as outlined above.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="es-legal__section mb-50">
                    <h3>8. Contact Us</h3>
                    <p>
                      For questions about returns, refunds, or exchanges, contact us at <a href={contactInfo.mailtoLink}>{contactInfo.email}</a>, call <a href={contactInfo.telLink}>{contactInfo.phone}</a>, or visit our <Link href="/contact">contact page</Link>. We are here to help.
                    </p>
                  </div>

                  {/* Agreement */}
                  <div className="es-legal__footer-note mt-60 pt-40">
                    <p>
                      By placing an order with {siteInfo.companyName}, you acknowledge that you have read and understood this Return Policy.
                    </p>
                  </div>
                            </div>
          </article>
        </div>
      </section>
      {/* return policy section end */}
    </>
  );
};

export default ReturnPolicyArea;
