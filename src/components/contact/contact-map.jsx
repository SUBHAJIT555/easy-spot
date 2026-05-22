import React from "react";
import contactInfo, { siteInfo } from "@/data/contact-info";

const ContactMap = () => {
  return (
    <section className="es-contact-map" aria-label="Store location map">
      <div className="es-contact-map__inner">
        <div className="es-contact-map__header">
          <p className="es-contact-map__eyebrow">
            <span className="es-contact-map__eyebrow-mark" aria-hidden="true" />
            Find us
          </p>
          <h2 className="es-contact-map__title">Visit our location</h2>
          <p className="es-contact-map__text">{contactInfo.addressDisplay}</p>
        </div>
        <div className="es-contact-map__frame">
          <iframe
            src={contactInfo.mapEmbedUrl}
            title={`${siteInfo.companyName} location on Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
