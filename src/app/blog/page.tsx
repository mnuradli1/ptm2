import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { blogPosts } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel dan insight tentang tren teknologi, regulasi pengadaan IT, dan tips keamanan siber.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & Insight"
        subtitle="Artikel terbaru seputar teknologi, regulasi, dan tren industri IT"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary">{post.category}</Badge>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 font-heading mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
