import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { certifications } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Sertifikasi",
  description: "Sertifikasi ISO, registrasi LKPP, TKDN, dan keanggotaan asosiasi PT Persada Teknologi Mandiri.",
};

const typeLabels: Record<string, { title: string; description: string }> = {
  iso: {
    title: "Sertifikasi ISO",
    description: "Standar manajemen internasional yang kami miliki",
  },
  registration: {
    title: "Registrasi & Legalitas",
    description: "Registrasi pada platform pengadaan dan legalitas perusahaan",
  },
  membership: {
    title: "Keanggotaan Asosiasi",
    description: "Keanggotaan pada asosiasi dan organisasi terkait",
  },
};

export default function SertifikasiPage() {
  const types = ["iso", "registration", "membership"] as const;

  return (
    <>
      <PageHeader
        title="Sertifikasi & Legalitas"
        subtitle="Komitmen kami terhadap standar kualitas dan kepatuhan regulasi"
        breadcrumbs={[{ label: "Sertifikasi" }]}
      />

      <section className="py-20">
        <Container>
          {types.map((type) => {
            const items = certifications.filter((c) => c.type === type);
            if (items.length === 0) return null;
            return (
              <div key={type} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-slate-900 font-heading mb-2">
                  {typeLabels[type].title}
                </h2>
                <p className="text-slate-600 mb-8">{typeLabels[type].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((cert, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                        {type === "iso" ? (
                          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-primary-500 mb-2">No: {cert.number}</p>
                      <p className="text-sm text-slate-600">{cert.scope}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
