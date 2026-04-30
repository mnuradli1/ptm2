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

      {/* Hero Image */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                PT Persada Teknologi Mandiri berkomitmen pada standar kualitas tertinggi.
                Kami memiliki berbagai sertifikasi internasional, registrasi pada platform pengadaan
                pemerintah, dan keanggotaan asosiasi industri yang menjamin kualitas layanan kami.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 bg-primary-50 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-primary-700">2 Sertifikasi ISO</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary-50 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-secondary-700">5 Registrasi Resmi</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">Anggota APTIKNAS</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80"
                alt="Dokumen sertifikasi dan legalitas perusahaan"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-slate-50">
        <Container>
          {types.map((type) => {
            const items = certifications.filter((c) => c.type === type);
            if (items.length === 0) return null;
            const typeColors = {
              iso: { bg: "bg-amber-50", iconBg: "bg-amber-100", iconColor: "text-amber-600", border: "border-amber-200" },
              registration: { bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-600", border: "border-blue-200" },
              membership: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", border: "border-emerald-200" },
            };
            const colors = typeColors[type];
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
                      className={`p-6 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-md transition-all`}
                    >
                      <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        {type === "iso" ? (
                          <svg className={`w-7 h-7 ${colors.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ) : type === "registration" ? (
                          <svg className={`w-7 h-7 ${colors.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        ) : (
                          <svg className={`w-7 h-7 ${colors.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-1">{cert.name}</h3>
                      <p className="text-sm text-slate-500 mb-3">No: {cert.number}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{cert.scope}</p>
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
