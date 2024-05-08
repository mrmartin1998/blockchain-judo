// src/app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Judo Belt System dApp',
  description: 'A decentralized application for managing Judo activities',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/register-judoka">Register Judoka</Link></li>
            <li><Link href="/promote-judoka">Promote Judoka</Link></li>
            <li><Link href="/get-belt-level">Get Belt Level</Link></li>
            <li><Link href="/judoka-profile">Judoka Profile</Link></li>
            <li><Link href="/leaderboards">Leaderboards</Link></li>
            <li><Link href="/competitions">Competitions</Link></li>
          </ul>
        </nav>
        {children}
        <footer>
          <p>&copy; 2024 Judo Belt System dApp. All rights reserved.</p>
          <p>Contact us at [email protected]</p>
        </footer>
      </body>
    </html>
  );
}
