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
              <Card key={solution.slug} href={`/solusi/${solution.slug}`} className="p-8">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
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
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
