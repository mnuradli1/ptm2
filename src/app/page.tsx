import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import StatsCounter from "@/components/sections/StatsCounter";
import PartnerLogos from "@/components/sections/PartnerLogos";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import EmberDivider from "@/components/ui/EmberDivider";
import SectionTitle from "@/components/ui/SectionTitle";
import { whyChooseUs } from "@/data/siteData";

const whyChooseUsIcons: Record<string, React.ReactNode> = {
  cycle: (
    <>
      <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </>
  ),
  "shield-check": (
    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.285z" />
  ),
  handshake: (
    <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  ),
  clock: (
    <>
      <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </>
  ),
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <EmberDivider />
      <StatsCounter />
      <EmberDivider />

      {/* Why Choose Us */}
      <section className="py-20">
        <Container>
          <SectionTitle
            title="Mengapa Memilih Persadatek?"
            subtitle="Keunggulan kami sebagai mitra teknologi informasi terpercaya"
          />
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  >
                    {whyChooseUsIcons[item.icon]}
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

      <EmberDivider />
      <PartnerLogos />
      <EmberDivider />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
