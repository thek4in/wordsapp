import './globals.css';

import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';

import ThemeProvider from '@/providers/theme-provider';
import Header from '@/components/header';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | WordsApp',
    default: 'WordsApp',
  },
  description: 'A 5-character word guessing app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col w-full h-screen">
            <Header />
            <div className="flex-1 p-20">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
