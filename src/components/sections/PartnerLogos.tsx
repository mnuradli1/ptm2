import { partners } from "@/data/siteData";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { asset } from "@/lib/asset";

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
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-100 bg-white hover:bg-orange-50/50 hover:border-primary-300 hover:shadow-[0_0_25px_rgba(234,88,12,0.2)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 bg-white p-2">
                <img
                  src={asset(partner.logo)}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs text-slate-400 text-center">{partner.level}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
