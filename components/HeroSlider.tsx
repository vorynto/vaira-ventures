"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  id: string;
  image: string;
  focus?: string;
  eyebrow: string;
  heading: string;
  accent: string;
  text: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    id: "display",
    image: "/assets/store-display.jpg",
    focus: "center 35%",
    eyebrow: "Jockey Showroom · Singaperumal Kovil",
    heading: "Discover Comfort That",
    accent: "Fits Your Life",
    text: "From everyday essentials to loungewear favourites, step inside and explore Jockey's latest collection at our Singaperumal Kovil showroom.",
    primary: { label: "Explore Our Outlets", href: "/outlets" },
    secondary: { label: "Get Directions", href: "/contact" },
  },
  {
    id: "front",
    image: "/assets/store-front.jpg",
    focus: "center 60%",
    eyebrow: "Now Open Near You",
    heading: "Your Neighbourhood",
    accent: "Jockey Store",
    text: "Conveniently located and easy to spot — visit our exclusive Jockey showroom for the brand's complete range, all in one place.",
    primary: { label: "Visit Us Today", href: "/contact" },
    secondary: { label: "About Vaira Ventures", href: "/about" },
  },
  {
    id: "menswear",
    image: "/assets/store-menswear.jpg",
    focus: "center 40%",
    eyebrow: "Men's Collection",
    heading: "Style For Every",
    accent: "Kind Of Day",
    text: "From Move activewear to everyday polos, joggers, and loungewear — gear up with Jockey's complete menswear range in-store.",
    primary: { label: "Shop In-Store", href: "/outlets" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
    touchStartX.current = null;
  };

  const current = SLIDES[index];

  return (
    <section
      className="hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Vaira Ventures store highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {SLIDES.map((slide, i) => (
          <div className="hero-slide-media" key={slide.id} aria-hidden={i !== index}>
            <Image
              src={slide.image}
              alt={slide.heading + " " + slide.accent}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: slide.focus ?? "center" }}
            />
            <div className="hero-slide-overlay" />
          </div>
        ))}
      </div>

      <div className="hero-slide-content">
        <div className="container">
          <div key={current.id} className="hero-slide-inner">
            <div className="hero-tag light">
              <span className="dot" /> {current.eyebrow}
            </div>
            <h1>
              {current.heading} <span className="accent">{current.accent}</span>
            </h1>
            <p>{current.text}</p>
            <div className="hero-actions">
              <Link href={current.primary.href} className="btn btn-light">
                {current.primary.label}
              </Link>
              <Link href={current.secondary.href} className="btn btn-ghost-light">
                {current.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button className="slider-arrow prev" aria-label="Previous slide" onClick={goPrev}>
        ‹
      </button>
      <button className="slider-arrow next" aria-label="Next slide" onClick={goNext}>
        ›
      </button>

      <div className="slider-dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            className={`dot${i === index ? " active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          >
            {i === index && !paused && <span key={current.id} className="dot-progress" />}
          </button>
        ))}
      </div>
    </section>
  );
}
