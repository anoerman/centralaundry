import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-brand-blue">
              {item.label}
            </Link>
          ) : (
            <span className="text-brand-navy">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
