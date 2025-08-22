import { Poppins } from 'next/font/google';
import './globals.css';
import GTM from '@/components/shared/GTM/GTM';

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
      <html lang="en" className={poppins.variable}>
        <head>
          <GTM.Head />
        </head>
        <body>
          <GTM.NoScript />
          {children}
          <GTM.EmbeddedAgentDeployment />
        </body>
      </html>
    </>
  );
}
