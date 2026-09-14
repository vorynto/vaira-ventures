import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import HeroSlider from "@/components/HeroSlider";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      {/* ===== Hero Slider ===== */}
      <HeroSlider />

      {/* ===== Stats Strip ===== */}
      <section className="hero-stats-strip">
        <div className="container">
          <div className="grid grid-3">
            <div>
              <div className="stat-num">
                <Counter target={2} />
              </div>
              <div className="stat-label">Flagship Brands</div>
            </div>
            <div>
              <div className="stat-num">
                <Counter target={1000} suffix="+" />
              </div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div>
              <div className="stat-num">
                <Counter target={7} suffix="-Day" />
              </div>
              <div className="stat-label">Open Every Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Brands ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Brands</span>
            <h2>
              Two Iconic Brands, <span className="text-gradient">One Destination</span>
            </h2>
            <p>At our Singaperumal Kovil outlet, discover the complete range from India&apos;s most loved apparel and kids&apos; brands.</p>
          </Reveal>
          <div className="grid grid-2">
            <Reveal className="brand-card jockey">
              <div className="brand-glow" />
              <div className="brand-tagline">Apparel &amp; Innerwear</div>
              <h3>Jockey</h3>
              <p>Premium innerwear, loungewear, and athleisure for men and women — combining comfort, quality, and everyday style.</p>
              <Link href="/outlets" className="btn btn-light">
                View Outlet Details
              </Link>
            </Reveal>
            <Reveal delay={1} className="brand-card firstcry">
              <div className="brand-glow" />
              <div className="brand-tagline">Baby &amp; Kids Store</div>
              <h3>First Cry</h3>
              <p>Everything for your little ones — clothing, toys, diapers, feeding essentials, footwear, and maternity needs.</p>
              <Link href="/outlets" className="btn btn-light">
                View Outlet Details
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why Vaira Ventures</span>
            <h2>
              Shopping Made Simple, <span className="text-gradient">Trusted &amp; Local</span>
            </h2>
            <p>We&apos;re committed to bringing genuine products and a delightful shopping experience to Singaperumal Kovil and its neighbouring communities.</p>
          </Reveal>
          <div className="grid grid-4">
            <Reveal className="card">
              <div className="icon-box">✓</div>
              <h3>100% Genuine</h3>
              <p>Authorized franchise outlet with authentic Jockey and First Cry products, always.</p>
            </Reveal>
            <Reveal delay={1} className="card">
              <div className="icon-box">📍</div>
              <h3>Convenient Location</h3>
              <p>Easily accessible at Singaperumal Kovil, off GST Road, Chennai.</p>
            </Reveal>
            <Reveal delay={2} className="card">
              <div className="icon-box">💬</div>
              <h3>Friendly Assistance</h3>
              <p>Our in-store team helps you find the right fit and the right products every time.</p>
            </Reveal>
            <Reveal delay={3} className="card">
              <div className="icon-box">🔄</div>
              <h3>Easy Exchanges</h3>
              <p>Hassle-free exchange policy on eligible products, backed by our brand partners.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Location Teaser ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Find Us</span>
            <h2>
              Visit Our Outlet in <span className="text-gradient">Singaperumal Kovil</span>
            </h2>
            <p>Conveniently located, easy to reach, and ready to welcome you and your family.</p>
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

      {/* ===== CTA ===== */}
      <Reveal className="cta-banner">
        <h2>Ready to Explore Our Collection?</h2>
        <p>Drop by our Singaperumal Kovil outlet today, or get in touch with our team for more information.</p>
        <div className="cta-actions">
          <Link href="/outlets" className="btn btn-light">
            Our Outlets
          </Link>
          <Link href="/contact" className="btn cta-btn-ghost">
            Contact Us
          </Link>
        </div>
      </Reveal>
    </>
  );
}
