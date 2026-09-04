import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/date";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-navy px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTimeMinutes} min read
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 min-h-[2.75rem] font-semibold leading-snug text-brand-navy">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-3 flex-1" />

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">By {post.author}</span>
          <span className="text-sm font-medium text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
