import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import StatsCounter from "@/components/sections/StatsCounter";
import PartnerLogos from "@/components/sections/PartnerLogos";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { whyChooseUs } from "@/data/siteData";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <StatsCounter />

      {/* Why Choose Us */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl font-heading">
              Mengapa Memilih Persadatek?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Keunggulan kami sebagai mitra teknologi informasi terpercaya
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnerLogos />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
