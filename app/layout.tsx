import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: 'Huzaifa Khan - Blockchain Developer & Full Stack Engineer',
  description: 'Professional blockchain developer specializing in smart contracts, DeFi protocols, and Web3 applications. Expert in Solidity, React, Node.js, and security auditing.',
  keywords: 'blockchain developer, smart contracts, DeFi, Web3, Solidity, React, Node.js, security auditing',
  authors: [{ name: 'Huzaifa Khan' }],
  creator: 'Huzaifa Khan',
  publisher: 'Huzaifa Khan',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8B5CF6',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://huzaifakhan.dev',
    title: 'Huzaifa Khan - Blockchain Developer',
    description: 'Professional blockchain developer specializing in smart contracts and Web3 applications',
    siteName: 'Huzaifa Khan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huzaifa Khan - Blockchain Developer',
    description: 'Professional blockchain developer specializing in smart contracts and Web3 applications',
    creator: '@huzaifakhandev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}