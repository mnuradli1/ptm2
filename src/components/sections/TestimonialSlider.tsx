"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/data/siteData";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/30 via-white to-orange-50/30">
      <Container>
        <SectionTitle
          title="Testimoni Klien"
          subtitle="Apa kata mereka tentang layanan Persadatek"
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  i === current
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8"
                }`}
              >
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm text-center">
                  <svg
                    className="w-10 h-10 text-secondary-300 mx-auto mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  i === current
                    ? "w-8 bg-gradient-to-r from-primary-500 to-secondary-500 shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
