"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/types";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<"all" | string>("all");

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );

  const visiblePosts = useMemo(() => {
    if (category === "all") return posts;
    return posts.filter((p) => p.category === category);
  }, [posts, category]);

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
            category === "all"
              ? "border-brand-blue bg-brand-blue text-white"
              : "border-gray-200 text-gray-600 hover:border-brand-blue/40"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(category === c ? "all" : c)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              category === c
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-gray-200 text-gray-600 hover:border-brand-blue/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {visiblePosts.length === 0 ? (
        <p className="mt-12 text-center text-gray-500">
          No articles in this category yet.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
