'use client';

import Script from 'next/script';

type Props = { enabled?: boolean };

export default function EmbeddedAgentDeployment({ enabled = false }: Props) {
  if (!enabled) return null;

  const bootstrapSrc =
    'https://venturetechgroup--uat.sandbox.my.site.com/ESWVTGWebsiteMessaging1754648854815/assets/js/bootstrap.min.js';

  return (
    <>
      {/* 1) Define init first, on the client */}
      <Script
        id="agent-embed-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.initEmbeddedMessaging = function initEmbeddedMessaging() {
              try {
                embeddedservice_bootstrap.settings.language = 'en_US';
                embeddedservice_bootstrap.init(
                  '00DEi00000COEFr',
                  'VTG_Website_Messaging_Setting',
                  'https://venturetechgroup--uat.sandbox.my.site.com/ESWVTGWebsiteMessaging1754648854815',
                  { scrt2URL: 'https://venturetechgroup--uat.sandbox.my.salesforce-scrt.com' }
                );
              } catch (err) {
                console.error('Error loading Embedded Messaging: ', err);
              }
            };
          `,
        }}
      />

      {/* 2) Load SF bootstrap and call init when it finishes */}
      <Script
        id="agent-embed-bootstrap"
        strategy="afterInteractive"
        src={bootstrapSrc}
        onLoad={() => {
          try {
            (window).initEmbeddedMessaging?.();
          } catch (e) {
            console.error('initEmbeddedMessaging threw:', e);
          }
        }}
      />
    </>
  );
}
