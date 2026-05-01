"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/siteData";
import Container from "@/components/ui/Container";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative bg-primary-600 py-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 100%, rgba(234,88,12,0.5) 0%, transparent 55%), radial-gradient(ellipse at 80% 0%, rgba(251,191,36,0.25) 0%, transparent 50%)",
        }}
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white font-heading drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-primary-100 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
