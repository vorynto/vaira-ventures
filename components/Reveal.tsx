"use client";

import { useEffect, useRef, useState } from "react";

type Delay = 1 | 2 | 3 | 4;

export default function Reveal({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay?: Delay;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [
    "reveal",
    visible ? "visible" : "",
    delay ? `delay-${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
