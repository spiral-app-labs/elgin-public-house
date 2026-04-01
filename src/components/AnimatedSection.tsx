"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function AnimatedSection({
  children,
  className = "",
  animation = "animate-fade-up",
  delay = "",
}: {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? `${animation} ${delay}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
