import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { services } from "@/data/siteData";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function LayananDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Layanan", href: "/layanan" },
          { label: service.title },
        ]}
      />

      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {service.fullDescription}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                Yang Kami Tawarkan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <svg
                      className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 p-8 bg-primary-50 rounded-2xl border border-primary-100">
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                Butuh Layanan {service.title}?
              </h3>
              <p className="text-slate-600 mb-5">
                Konsultasikan kebutuhan Anda dengan tim ahli kami. Kami akan memberikan
                solusi terbaik sesuai kebutuhan dan anggaran organisasi Anda.
              </p>
              <a
                href="/kontak"
                className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Hubungi Kami
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
