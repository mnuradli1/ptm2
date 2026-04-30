import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { blogPosts } from "@/data/siteData";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="primary">{post.category}</Badge>
                <span className="text-sm text-slate-500">{post.date}</span>
                <span className="text-sm text-slate-500">oleh {post.author}</span>
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
              />
              <div
                className="prose prose-slate max-w-none prose-headings:font-heading prose-a:text-primary-500"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-28">
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-4">
                  Artikel Lainnya
                </h3>
                <div className="space-y-4">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block p-4 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all"
                    >
                      <Badge variant="primary" className="mb-2">{p.category}</Badge>
                      <h4 className="font-medium text-slate-900 text-sm hover:text-primary-500 transition-colors">
                        {p.title}
                      </h4>
                      <span className="text-xs text-slate-400 mt-1 block">{p.date}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
