"use client";

import { useState } from "react";
import PackageCard from "@/components/PackageCard";
import Pagination from "@/components/Pagination";
import type { BusinessPackage } from "@/types";

const PAGE_SIZE = 6;

export default function PackagesList({
  packages,
}: {
  packages: BusinessPackage[];
}) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(packages.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const shownPackages = packages.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {shownPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
