import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ServiceCards from "@/components/sections/ServiceCards";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Layanan IT Procurement, System Integration, Managed Services, Cloud Solutions, Cybersecurity, dan IT Consulting.",
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        title="Layanan Kami"
        subtitle="Solusi teknologi informasi end-to-end untuk mendukung kebutuhan organisasi Anda"
        breadcrumbs={[{ label: "Layanan" }]}
      />
      <ServiceCards />
      <CTASection />
    </>
  );
}
