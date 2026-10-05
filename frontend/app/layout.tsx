import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lagos Life Sim',
  description: 'A realistic multiplayer life-simulation game set in Lagos, Nigeria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
