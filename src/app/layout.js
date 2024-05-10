"use client";
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isActive = (href) => pathname === href ? "active-nav-item" : "";

  return (
    <html lang="en">
      <body>
        <nav className="nav-container">
          <ul className="nav-list">
            <li className={`nav-item ${isActive("/")}`}>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${isActive("/register-judoka")}`}>
              <Link href="/register-judoka" className="nav-link">Register Judoka</Link>
            </li>
            <li className={`nav-item ${isActive("/promote-judoka")}`}>
              <Link href="/promote-judoka" className="nav-link">Promote Judoka</Link>
            </li>
            <li className={`nav-item ${isActive("/get-belt-level")}`}>
              <Link href="/get-belt-level" className="nav-link">Get Belt Level</Link>
            </li>
            <li className={`nav-item ${isActive("/judoka-profile")}`}>
              <Link href="/judoka-profile" className="nav-link">Judoka Profile</Link>
            </li>
            <li className={`nav-item ${isActive("/leaderboards")}`}>
              <Link href="/leaderboards" className="nav-link">Leaderboards</Link>
            </li>
            <li className={`nav-item ${isActive("/competitions")}`}>
              <Link href="/competitions" className="nav-link">Competitions</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="footer">
          <p>&copy; 2024 Judo Belt System dApp. All rights reserved.</p>
          <p>Contact us at [email protected]</p>
        </footer>
      </body>
    </html>
  );
}
