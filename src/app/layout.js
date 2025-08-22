import { Poppins } from 'next/font/google';
import './globals.css';
import GTM from '@/components/shared/GTM/GTM';
import EmbeddedAgentDeployment from '@/components/EmbeddedAgentDeployment';

const isProduction = true;

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
          <EmbeddedAgentDeployment enabled={isProduction} />
        </body>
      </html>
    </>
  );
}
