import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-primary-200">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-primary-100 max-w-2xl">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
