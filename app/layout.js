import "./globals.css";
import Breadcrumbs from "./components/Breadcrumbs";
import SidebarNav from "./components/SidebarNav";
import { sideNav } from "./config/navigation";

export const metadata = {
  title: "dev-notes",
  description: "Learning dashboard UI inspired by the provided reference design."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-shell">
          <aside className="sidebar">
            <div className="brand-row">
              <div className="brand">dev-notes</div>
            </div>
            <SidebarNav items={sideNav} />
  
          </aside>

          <header className="topbar">
            <Breadcrumbs />
          </header>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
