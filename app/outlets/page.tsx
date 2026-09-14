import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Outlets",
  description: "Visit the Jockey and First Cry franchise outlets by Vaira Ventures at Singaperumal Kovil, Chennai. Store timings, address, and directions.",
};

export default function OutletsPage() {
  return (
    <>
      {/* ===== Page Hero ===== */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <span className="current">Our Outlets</span>
          </div>
          <h1>
            Two Outlets, <span className="text-gradient">One Location</span>
          </h1>
          <p>Both our Jockey showroom and First Cry store are located at Singaperumal Kovil, Chennai — easy to find, easy to shop.</p>
        </div>
      </section>

      {/* ===== Outlets ===== */}
      <section className="section">
        <div className="container">
          {/* Jockey Outlet */}
          <Reveal className="outlet-card">
            <div className="outlet-visual jockey">
              <div>
                <span className="badge">Innerwear &amp; Apparel</span>
                <h3 style={{ marginTop: 18 }}>Jockey Showroom</h3>
              </div>
              <div className="outlet-icon">👕</div>
            </div>
            <div className="outlet-info">
              <div className="info-row">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>Jockey Showroom, Vaira Ventures, Singaperumal Kovil, Chengalpattu District, Chennai, Tamil Nadu</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">🕒</div>
                <div>
                  <h4>Store Timings</h4>
                  <p>Monday – Sunday: 10:00 AM – 9:00 PM</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Contact</h4>
                  <a href="tel:+910000000000">+91 00000 00000</a>
                </div>
              </div>
              <div className="tag-list">
                <span>Men&apos;s Innerwear</span>
                <span>Women&apos;s Innerwear</span>
                <span>Loungewear</span>
                <span>Athleisure</span>
                <span>Socks &amp; Accessories</span>
              </div>
              <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Get Directions
                </Link>
                <a href="tel:+910000000000" className="btn btn-outline">
                  Call Store
                </a>
              </div>
            </div>
          </Reveal>

          {/* First Cry Outlet */}
          <Reveal delay={1} className="outlet-card">
            <div className="outlet-visual firstcry">
              <div>
                <span className="badge">Baby &amp; Kids Store</span>
                <h3 style={{ marginTop: 18 }}>First Cry Store</h3>
              </div>
              <div className="outlet-icon">🧸</div>
            </div>
            <div className="outlet-info">
              <div className="info-row">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>First Cry Store, Vaira Ventures, Singaperumal Kovil, Chengalpattu District, Chennai, Tamil Nadu</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">🕒</div>
                <div>
                  <h4>Store Timings</h4>
                  <p>Monday – Sunday: 10:00 AM – 9:00 PM</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Contact</h4>
                  <a href="tel:+910000000000">+91 00000 00000</a>
                </div>
              </div>
              <div className="tag-list">
                <span>Baby Clothing</span>
                <span>Kids Apparel</span>
                <span>Toys &amp; Games</span>
                <span>Feeding &amp; Diapers</span>
                <span>Maternity Essentials</span>
              </div>
              <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Get Directions
                </Link>
                <a href="tel:+910000000000" className="btn btn-outline">
                  Call Store
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Map ===== */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Location</span>
            <h2>
              Find Us on the <span className="text-gradient">Map</span>
            </h2>
            <p>Both outlets are situated together at Singaperumal Kovil, making it easy to shop for the whole family in one visit.</p>
          </Reveal>
          <Reveal className="map-frame">
            <iframe
              src="https://www.google.com/maps?q=Singaperumal%20Kovil,%20Chennai&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vaira Ventures outlets location map"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <Reveal className="cta-banner">
        <h2>Plan Your Visit Today</h2>
        <p>Need help with directions or store availability? Our team is just a call or message away.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-light">
            Contact Us
          </Link>
          <a href="tel:+910000000000" className="btn cta-btn-ghost">
            Call Now
          </a>
        </div>
      </Reveal>
    </>
  );
}
