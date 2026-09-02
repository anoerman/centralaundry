import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-block rounded-md px-6 py-3 font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? `${base} bg-brand-yellow text-brand-navy hover:opacity-90`
      : `${base} border-2 border-white text-white hover:bg-white hover:text-brand-navy`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
