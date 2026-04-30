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
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
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
