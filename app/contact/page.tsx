import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Vaira Ventures — Jockey and First Cry franchise outlets at Singaperumal Kovil, Chennai.",
};

export default function ContactPage() {
  return (
    <>
      {/* ===== Page Hero ===== */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <span className="current">Contact Us</span>
          </div>
          <h1>
            We&apos;d Love to <span className="text-gradient">Hear From You</span>
          </h1>
          <p>Questions about our products, store timings, or directions? Reach out and our team will respond promptly.</p>
        </div>
      </section>

      {/* ===== Contact Grid ===== */}
      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info-card">
            <h3>Contact Information</h3>
            <p>Reach out to us directly, or drop by our outlets at Singaperumal Kovil, Chennai.</p>

            <div className="contact-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Our Address</h4>
                <p>
                  Vaira Ventures, Singaperumal Kovil,
                  <br />
                  Chengalpattu District, Chennai,
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+910000000000">+91 00000 00000</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:info@vairaventures.in">info@vairaventures.in</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="info-icon">🕒</div>
              <div>
                <h4>Store Timings</h4>
                <p>Monday – Sunday: 10:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div className="social-row">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="WhatsApp">wa</a>
            </div>
          </Reveal>

          <Reveal delay={1} className="form-card">
            <h3 style={{ marginBottom: 8 }}>Send Us a Message</h3>
            <p style={{ color: "var(--gray-500)", marginBottom: 26 }}>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ===== Map ===== */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Directions</span>
            <h2>
              Locate Us on the <span className="text-gradient">Map</span>
            </h2>
          </Reveal>
          <Reveal className="map-frame">
            <iframe
              src="https://www.google.com/maps?q=Singaperumal%20Kovil,%20Chennai&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vaira Ventures location map"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
