import Script from 'next/script';
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-W93WP98D`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              if(${process.env.NODE_ENV !== 'production'}) {
                return;
              }
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', "GTM-W93WP98D", {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
