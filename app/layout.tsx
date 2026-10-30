import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Rio Grande Refresh | Smart Vending in New Mexico',
  description: 'AI-powered vending machines and smart coolers for New Mexico businesses. Bring a smarter refreshment experience to your workplace with Rio Grande Refresh.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
