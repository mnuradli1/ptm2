import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { partners, partnerCategories } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Partner",
  description: "Bermitra dengan vendor teknologi global terkemuka: Cisco, Dell, HPE, Microsoft, Fortinet, VMware, dan lainnya.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        title="Partner Teknologi"
        subtitle="Bermitra dengan vendor teknologi global terkemuka untuk memberikan solusi terbaik"
        breadcrumbs={[{ label: "Partner" }]}
      />

      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              Persadatek membangun kemitraan strategis dengan vendor teknologi terkemuka dunia
              untuk memastikan klien kami mendapatkan produk dan solusi berkualitas dengan
              dukungan teknis terbaik.
            </p>
          </div>

          {partnerCategories.map((category) => {
            const categoryPartners = partners.filter((p) => p.category === category);
            if (categoryPartners.length === 0) return null;
            return (
              <div key={category} className="mb-12 last:mb-0">
                <h2 className="text-xl font-bold text-slate-900 font-heading mb-6 pb-3 border-b border-slate-200">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryPartners.map((partner) => (
                    <div
                      key={partner.name}
                      className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-primary-100 transition-all"
                    >
                      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-slate-500 text-center leading-tight">
                          {partner.name.split(" ")[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{partner.name}</h3>
                        <p className="text-sm text-primary-500">{partner.level}</p>
                      </div>
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
