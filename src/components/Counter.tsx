"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(end);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const increment = end / steps;
    const stepTime = duration / steps;
    let current = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const frame = requestAnimationFrame(() => {
      setCount(0);
      timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          if (timer) clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
    });

    return () => {
      cancelAnimationFrame(frame);
      if (timer) clearInterval(timer);
    };
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
