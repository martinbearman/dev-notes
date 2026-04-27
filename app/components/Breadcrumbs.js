"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment).replace(/-/g, " "));

  const crumbs = ["Home", ...segments.filter((segment) => segment.toLowerCase() !== "home")];

  return (
    <nav className="topnav" aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={`${crumb}-${index}`}>
            {index > 0 ? " / " : ""}
            {isLast ? <span aria-current="page">{crumb}</span> : crumb}
          </span>
        );
      })}
    </nav>
  );
}
