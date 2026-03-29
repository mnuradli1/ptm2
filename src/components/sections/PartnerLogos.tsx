import { partners } from "@/data/siteData";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PartnerLogos() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Partner Teknologi"
          subtitle="Bermitra dengan vendor teknologi global terkemuka untuk solusi terbaik"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-primary-100 transition-all group"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-50 transition-colors">
                <span className="text-xs font-bold text-slate-500 group-hover:text-primary-500 text-center leading-tight">
                  {partner.name}
                </span>
              </div>
              <span className="text-xs text-slate-400">{partner.level}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
