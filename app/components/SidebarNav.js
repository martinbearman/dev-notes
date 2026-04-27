"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ items }) {
  const pathname = usePathname();

  const isItemActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="sidebar-nav" aria-label="Sidebar">
      {items.map((item) => {
        const active = isItemActive(item.href);
        const hasChildren = Boolean(item.children?.length);
        const expanded = hasChildren && active;

        return (
          <div key={`${item.href}-${item.label}`} className="sidebar-nav-item">
            <div className="sidebar-nav-row">
              <Link
                href={item.href}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </div>

            {hasChildren && expanded ? (
              <div className="sidebar-subnav">
                {item.children.map((child) => (
                  <Link
                    key={`${child.href}-${child.label}`}
                    href={child.href}
                    className={isItemActive(child.href) ? "active" : undefined}
                    aria-current={isItemActive(child.href) ? "page" : undefined}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
