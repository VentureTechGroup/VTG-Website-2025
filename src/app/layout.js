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
          <script type='text/javascript'>
          	function initEmbeddedMessaging() {
          		try {
          			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
          
          			embeddedservice_bootstrap.init(
          				'00DEi00000COEFr',
          				'VTG_Website_Messaging_Setting',
          				'https://venturetechgroup--uat.sandbox.my.site.com/ESWVTGWebsiteMessaging1754648854815',
          				{
          					scrt2URL: 'https://venturetechgroup--uat.sandbox.my.salesforce-scrt.com'
          				}
          			);
          		} catch (err) {
          			console.error('Error loading Embedded Messaging: ', err);
          		}
          	};
          </script>
          <script type='text/javascript' src='https://venturetechgroup--uat.sandbox.my.site.com/ESWVTGWebsiteMessaging1754648854815/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>

        </body>
      </html>
    </>
  );
}
