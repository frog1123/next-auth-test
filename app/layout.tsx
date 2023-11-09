import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextAuthSessionProvider } from '@/components/providers/next-auth-session-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next-auth-demo',
  description: 'this a example of user auth with nextjs next-auth & prisma'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className} dir='ltr'>
        <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
