import React from "react";
import ContactForm from "../forms/contact-form";
import contactInfo, { siteInfo } from "@/data/contact-info";

const ContactArea = () => {
  const { address } = contactInfo;

  return (
    <section className="es-contact" aria-labelledby="es-contact-heading">
      <div className="es-contact__inner">
        <header className="es-contact__intro">
          <p className="es-contact__eyebrow">
            <span className="es-contact__eyebrow-mark" aria-hidden="true" />
            Get in touch
          </p>
          <h2 id="es-contact-heading" className="es-contact__title">
            Reach the {siteInfo.companyName} team
          </h2>
          <p className="es-contact__text">
            Fill out the form and we&apos;ll get back to you within one business day.
            You can also call or email us directly using the details on the right.
          </p>
        </header>

        <div className="es-contact__grid">
          <div className="es-contact__form-panel">
            <h3 className="es-contact__form-title">Send a message</h3>
            <ContactForm />
          </div>

          <aside className="es-contact__aside" aria-label="Contact information">
            <div className="es-contact__card">
              <div className="es-contact__card-icon" aria-hidden="true">
                <i className="fa-regular fa-envelope" />
              </div>
              <div className="es-contact__card-body">
                <h4 className="es-contact__card-title">Email &amp; phone</h4>
                <p>
                  <a href={contactInfo.mailtoLink}>{contactInfo.email}</a>
                </p>
                <p>
                  <a href={contactInfo.telLink}>{contactInfo.phone}</a>
                </p>
              </div>
            </div>

            <div className="es-contact__card">
              <div className="es-contact__card-icon" aria-hidden="true">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div className="es-contact__card-body">
                <h4 className="es-contact__card-title">Our office</h4>
                <p>
                  <a href={contactInfo.mapLink} target="_blank" rel="noreferrer">
                    {address.line1}
                    <br />
                    {address.line2}
                    <br />
                    {address.city}, {address.state} {address.pin}
                    <br />
                    {address.country}
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
