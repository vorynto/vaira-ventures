import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vaira Ventures, the franchise partner running Jockey and First Cry outlets at Singaperumal Kovil, Chennai.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== Page Hero ===== */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <span className="current">About Us</span>
          </div>
          <h1>
            Building Trust, <span className="text-gradient">One Store at a Time</span>
          </h1>
          <p>Vaira Ventures is the franchise partner bringing Jockey and First Cry to the Singaperumal Kovil community in Chennai.</p>
        </div>
      </section>

      {/* ===== Our Story ===== */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "center", gap: 60 }}>
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: 32, marginBottom: 18 }}>
              A Local Venture with a <span className="text-gradient">National Standard</span>
            </h2>
            <p style={{ color: "var(--gray-500)", marginBottom: 16 }}>
              Vaira Ventures was founded with a simple goal — to bring nationally trusted, high-quality brands closer to the people of Singaperumal Kovil and the surrounding neighbourhoods in Chennai.
            </p>
            <p style={{ color: "var(--gray-500)", marginBottom: 16 }}>
              As the authorized franchise partner for <strong>Jockey</strong> and <strong>First Cry</strong>, we operate dedicated outlets that serve every member of the family — from premium innerwear and apparel for adults, to clothing, toys, and essentials for babies and children.
            </p>
            <p style={{ color: "var(--gray-500)" }}>
              We believe shopping for the things that matter most shouldn&apos;t mean a long drive across the city. That&apos;s the promise behind Vaira Ventures — genuine products, honest service, and a store you can call your own.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="hero-card" style={{ maxWidth: "100%", aspectRatio: "4 / 3" }}>
              <img src="/assets/logo.png" alt="Vaira Ventures" style={{ width: "38%" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Mission / Vision ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="card">
              <div className="icon-box">🎯</div>
              <h3 style={{ fontSize: 22 }}>Our Mission</h3>
              <p style={{ fontSize: 15.5 }}>
                To make genuine, high-quality apparel and kids&apos; products accessible to every family in Singaperumal Kovil and beyond — delivered with warmth, honesty, and care in every interaction.
              </p>
            </Reveal>
            <Reveal delay={1} className="card">
              <div className="icon-box">🔭</div>
              <h3 style={{ fontSize: 22 }}>Our Vision</h3>
              <p style={{ fontSize: 15.5 }}>
                To be the most trusted retail destination in our region — recognized for reliability, product authenticity, and a shopping experience that keeps customers coming back.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Journey / Timeline ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Journey</span>
            <h2>
              How We <span className="text-gradient">Got Here</span>
            </h2>
          </Reveal>
          <div className="timeline">
            <Reveal className="timeline-item">
              <div className="timeline-dot" />
              <div className="year">Step 01</div>
              <h4>The Idea</h4>
              <p>Vaira Ventures was conceived to bridge the gap between trusted national brands and the growing Singaperumal Kovil community.</p>
            </Reveal>
            <Reveal delay={1} className="timeline-item">
              <div className="timeline-dot" />
              <div className="year">Step 02</div>
              <h4>Franchise Partnership</h4>
              <p>We partnered with Jockey and First Cry to bring their complete product ranges under authorized franchise outlets.</p>
            </Reveal>
            <Reveal delay={2} className="timeline-item">
              <div className="timeline-dot" />
              <div className="year">Step 03</div>
              <h4>Outlet Launch</h4>
              <p>Our outlets opened their doors at Singaperumal Kovil, offering apparel, innerwear, and kids&apos; essentials under one roof.</p>
            </Reveal>
            <Reveal delay={3} className="timeline-item">
              <div className="timeline-dot" />
              <div className="year">Today</div>
              <h4>Growing Together</h4>
              <p>We continue to serve our community with genuine products, attentive service, and a shopping experience built on trust.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What Drives Us</span>
            <h2>
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </Reveal>
          <div className="grid grid-4">
            <Reveal className="card">
              <div className="icon-box">🤝</div>
              <h3>Trust</h3>
              <p>We stand behind every product we sell with complete authenticity.</p>
            </Reveal>
            <Reveal delay={1} className="card">
              <div className="icon-box">💎</div>
              <h3>Quality</h3>
              <p>Only genuine Jockey and First Cry merchandise, no compromises.</p>
            </Reveal>
            <Reveal delay={2} className="card">
              <div className="icon-box">❤️</div>
              <h3>Care</h3>
              <p>Every customer is treated like family, with patience and respect.</p>
            </Reveal>
            <Reveal delay={3} className="card">
              <div className="icon-box">🌱</div>
              <h3>Community</h3>
              <p>We&apos;re proud to grow alongside the Singaperumal Kovil neighbourhood.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            <Reveal className="stat-card">
              <div className="num">
                <Counter target={2} />
              </div>
              <div className="label">Franchise Brands</div>
            </Reveal>
            <Reveal delay={1} className="stat-card">
              <div className="num">
                <Counter target={1000} suffix="+" />
              </div>
              <div className="label">Customers Served</div>
            </Reveal>
            <Reveal delay={2} className="stat-card">
              <div className="num">
                <Counter target={500} suffix="+" />
              </div>
              <div className="label">Product Varieties</div>
            </Reveal>
            <Reveal delay={3} className="stat-card">
              <div className="num">
                <Counter target={7} suffix="-Day" />
              </div>
              <div className="label">Store Availability</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="cta-banner">
          <h2>Come Experience the Vaira Ventures Difference</h2>
          <p>Visit our Singaperumal Kovil outlet and see why our customers keep coming back.</p>
          <div className="cta-actions">
            <Link href="/outlets" className="btn btn-light">
              Our Outlets
            </Link>
            <Link href="/contact" className="btn cta-btn-ghost">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
