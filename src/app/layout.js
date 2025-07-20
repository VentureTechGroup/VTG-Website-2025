import { Poppins } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics/GoogleAnalytics';

export const metadata = {
  title: 'Venture Tech Group',
  description: '',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleAnalytics />
      <html lang="en" className={poppins.variable}>
        <body>{children}</body>
      </html>
    </>
  );
}
