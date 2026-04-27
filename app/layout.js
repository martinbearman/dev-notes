import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "DevLab Notes",
  description: "Personal reference dashboard for coding concepts."
};

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/react", label: "React" },
  { href: "/react/hooks", label: "Hooks" }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="topbar">
            <div className="brand">DevLab</div>
            <nav className="topnav">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
