"use client";

import { useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Tabs from "@/components/ui/Tabs";
import { portfolioProjects } from "@/data/siteData";

const tabs = ["Semua", "Pemerintah", "BUMN", "Swasta"];
const categoryMap: Record<string, string> = {
  Pemerintah: "pemerintah",
  BUMN: "bumn",
  Swasta: "swasta",
};

export default function PortofolioPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filtered =
    activeTab === "Semua"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === categoryMap[activeTab]);

  return (
    <>
      <PageHeader
        title="Portofolio"
        subtitle="Proyek-proyek yang telah kami selesaikan di berbagai sektor"
        breadcrumbs={[{ label: "Portofolio" }]}
      />

      <section className="py-20">
        <Container>
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary">
                      {project.category === "pemerintah" ? "Pemerintah" : project.category === "bumn" ? "BUMN" : "Swasta"}
                    </Badge>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 font-heading mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-500 mb-3">{project.client}</p>
                  <p className="text-sm text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
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
