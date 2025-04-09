import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Mulish } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce Dashboard',
  description: 'E-commerce analytics dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
