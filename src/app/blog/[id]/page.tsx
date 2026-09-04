import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, Clock, Lightbulb } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/date";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  return {
    title: post ? `${post.title} — CentraLaundry` : "Article Not Found",
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="mx-auto mt-6 max-w-prose">
        <span className="rounded-full bg-brand-navy px-2.5 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>

        <h1 className="mt-3 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <span>By {post.author}</span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-brand-blue" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-blue" />
            {post.readTimeMinutes} min read
          </span>
        </div>

        <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 65ch, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-gray-900">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-6">
          <h2 className="flex items-center gap-2 font-semibold text-brand-navy">
            <Lightbulb className="h-5 w-5 text-brand-blue" />
            Key Takeaways
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-gray-700">
            {post.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Button
            href={getWhatsAppLink(
              `Hi CentraLaundry, I read "${post.title}" and had a question.`
            )}
          >
            Ask Us About This
          </Button>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-navy">
            More {post.category} Articles
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.id} post={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
