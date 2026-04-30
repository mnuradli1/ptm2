"use client";

import { useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { jobListings, siteConfig } from "@/data/siteData";

export default function KarirPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="Karir"
        subtitle="Bergabunglah dengan tim profesional kami dan berkembang bersama"
        breadcrumbs={[{ label: "Karir" }]}
      />

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Tim Persadatek bekerja bersama"
                className="w-full h-64 object-cover rounded-2xl mb-8"
              />
              <p className="text-lg text-slate-600 leading-relaxed text-center">
                Kami selalu mencari talenta terbaik yang bersemangat dalam teknologi
                dan ingin memberikan dampak positif. Bergabunglah dengan tim kami
                dan kembangkan karir Anda bersama Persadatek.
              </p>
            </div>

            <div className="space-y-4">
              {jobListings.map((job, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-slate-900 font-heading text-lg">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge>{job.department}</Badge>
                        <Badge>{job.location}</Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openIndex === i && (
                    <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                      <p className="text-slate-600 mb-4">{job.description}</p>
                      <h4 className="font-semibold text-slate-900 mb-3">Persyaratan:</h4>
                      <ul className="space-y-2 mb-6">
                        {job.requirements.map((req, j) => (
                          <li key={j} className="flex gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`mailto:careers@persadatek.com?subject=Lamaran - ${job.title}`}
                        className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors text-sm"
                      >
                        Lamar Posisi Ini
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                Tidak menemukan posisi yang sesuai?
              </h3>
              <p className="text-slate-600 mb-4">
                Kirimkan CV dan portofolio Anda ke email kami. Kami akan menghubungi
                Anda jika ada posisi yang cocok.
              </p>
              <a
                href="mailto:careers@persadatek.com"
                className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600"
              >
                careers@persadatek.com
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
