import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { solutions } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Solusi",
  description: "Solusi teknologi informasi untuk sektor pemerintahan, enterprise, data center, dan network & security.",
};

export default function SolusiPage() {
  return (
    <>
      <PageHeader
        title="Solusi Kami"
        subtitle="Solusi teknologi yang disesuaikan dengan kebutuhan setiap sektor"
        breadcrumbs={[{ label: "Solusi" }]}
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <Card key={solution.slug} href={`/solusi/${solution.slug}`} className="p-0 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 font-heading mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {solution.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-500">
                    Selengkapnya
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
