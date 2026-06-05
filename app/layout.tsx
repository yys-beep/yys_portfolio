import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yeoh Yee Syuen — Portfolio',
  description: 'Computer Science student. Aspiring software engineer. Building software, exploring AI, and turning ideas into products.',
  keywords: ['software engineer', 'computer science', 'portfolio', 'full-stack', 'Malaysia'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
