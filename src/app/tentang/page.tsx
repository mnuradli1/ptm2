import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { companyInfo, teamMembers } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Profil PT Persada Teknologi Mandiri - Perusahaan IT Procurement & System Integrator terpercaya di Indonesia.",
};

export default function TentangPage() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat PT Persada Teknologi Mandiri"
        breadcrumbs={[{ label: "Tentang Kami" }]}
      />

      {/* Company Profile */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 font-heading mb-6">
              {companyInfo.legalName}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Berdiri sejak {companyInfo.founded}, {companyInfo.legalName} adalah perusahaan
              IT Procurement dan System Integrator yang berkomitmen menyediakan solusi
              teknologi informasi terbaik untuk sektor pemerintah, BUMN, dan swasta di Indonesia.
              Dengan tim profesional bersertifikat dan kemitraan strategis bersama vendor
              teknologi global, kami siap mendukung transformasi digital organisasi Anda.
            </p>
          </div>
        </Container>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-4">Visi</h3>
              <p className="text-slate-600 leading-relaxed">{companyInfo.vision}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-4">Misi</h3>
              <ul className="space-y-3">
                {companyInfo.mission.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Nilai Perusahaan */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Nilai Perusahaan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyInfo.values.map((value, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-slate-100 hover:border-primary-200 transition-all">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-500 font-bold">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 font-heading">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tim Manajemen */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Tim Manajemen</h2>
            <p className="mt-4 text-lg text-slate-600">Dipimpin oleh para profesional berpengalaman</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 font-heading">{member.name}</h3>
                <p className="text-sm text-primary-500 font-medium mb-3">{member.title}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Perjalanan Kami</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {companyInfo.milestones.map((milestone, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {milestone.year.toString().slice(-2)}
                  </div>
                  {i < companyInfo.milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-100 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="text-sm font-semibold text-primary-500">{milestone.year}</span>
                  <p className="text-slate-700 mt-1">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
