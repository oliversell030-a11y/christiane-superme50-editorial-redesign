import type { Metadata } from 'next';
import { Lora, Raleway } from 'next/font/google';
import '@/app/globals.css';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import { siteConfig } from '@/lib/site';

const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display' });
const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: 'SuperMe50+ Editorial Redesign',
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: 'SuperMe50+ Editorial Redesign',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: 'de_DE',
    type: 'website',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author,
  url: siteConfig.siteUrl,
  jobTitle: 'Coach für Wohlbefinden ab 50',
  description: siteConfig.description,
  sameAs: [siteConfig.facebookUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${lora.variable} ${raleway.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-sageDeep focus:px-4 focus:py-2 focus:text-background"
        >
          Zum Inhalt springen
        </a>
        <div className="relative min-h-screen overflow-hidden">
          <SiteHeader />
          <main id="main" className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
