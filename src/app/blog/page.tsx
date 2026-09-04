import BlogList from "@/components/BlogList";
import CtaBand from "@/components/CtaBand";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog — CentraLaundry",
};

export default function BlogPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold text-brand-navy">Blog</h1>
        <p className="mt-2 text-gray-600">
          Maintenance tips, buying guides, and industry news to help you get
          more out of your laundry equipment and business.
        </p>
        <BlogList posts={blogPosts} />
      </div>

      <CtaBand />
    </>
  );
}
