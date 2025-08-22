import Script from 'next/script';

const gtmId = 'GTM-W93WP98D';
const isProduction = process.env.NODE_ENV === 'production';

function Head() {
  if (!isProduction) return null;
  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
      }}
    />
  );
}

function NoScript() {
  if (!isProduction) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
}

/**
 * 1) Define initEmbeddedMessaging on the page first.
 * 2) Load Salesforce bootstrap and call init on load (like the raw <script onload>).
 */
function EmbeddedAgentDeployment() {
  if (!isProduction) return null;

  const bootstrapSrc =
    'https://venturetechgroup--uat.sandbox.my.site.com/ESWVTGWebsiteMessaging1754648854815/assets/js/bootstrap.min.js';

  return (
    <>
      {/* 1) Define the init function */}
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

      {/* 2) Load the external script and call init when it finishes */}
      <Script
        id="agent-embed-bootstrap"
        strategy="afterInteractive"
        src={bootstrapSrc}
        onLoad={() => {
          // Call the same thing the raw <script onload="..."> would call
          try { (window as any).initEmbeddedMessaging?.(); } catch (e) {
            console.error('initEmbeddedMessaging threw:', e);
          }
        }}
      />
    </>
  );
}

const GTM = {
  Head,
  NoScript,
  EmbeddedAgentDeployment
};

export default GTM;
