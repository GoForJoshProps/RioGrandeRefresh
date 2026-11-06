import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://riogranderefresh.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Rio Grande Refresh | Free Smart Vending Machines in Albuquerque, NM',
  description: 'Rio Grande Refresh provides AI-powered vending machines and smart coolers for Albuquerque and New Mexico workplaces. Free installation, stocking and maintenance, with snacks, drinks and fresh meals.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Rio Grande Refresh | Smart Vending for New Mexico Businesses',
    description: 'Modern smart vending machines and AI coolers for your workplace, installed, stocked and maintained at no cost to your business.',
    url: siteUrl,
    siteName: 'Rio Grande Refresh',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
