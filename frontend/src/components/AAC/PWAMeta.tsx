/** 
 * This fragment contains the full set of header tags required by next-pwa
 * https://www.npmjs.com/package/next-pwa 
 */
export default function PWAMeta() {
  return (
    <>
      {/* https://stackoverflow.com/a/6771584 */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="application-name" content="SmartSpeech" />
      <meta
        name="description"
        content="The user-friendly AAC app that works by drawing"
      />
      {/* https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="SmartSpeech" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* https://webmasters.stackexchange.com/a/131437 */}
      <meta name="msapplication-config" content="/browserconfig.xml" />
      {/* https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn255024(v=vs.85) */}
      <meta name="msapplication-TileColor" content="#2B5797" />
      {/* https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/bg182645(v=vs.85)?redirectedfrom=MSDN#link-highlighting */}
      <meta name="msapplication-tap-highlight" content="no" />
      {/* https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color */}
      <meta name="theme-color" content="#000000" />

      {/* https://developer.chrome.com/en/docs/lighthouse/pwa/apple-touch-icon/ */}
      {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
                    <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" /> */}

      {/* To generate icons: https://favicon.io/favicon-converter/ */}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/favicon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="/manifest.json"
        crossOrigin="use-credentials"
      />
      {/* https://yoast.com/developer-blog/safari-pinned-tab-icon-mask-icon/ */}
      <link rel="mask-icon" href="/next.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />

      {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started */}
      {/* <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content="https://yourdomain.com" />
                    <meta name="twitter:title" content="PWA App" />
                    <meta name="twitter:description" content="Best PWA App in the world" />
                    <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
                    <meta name="twitter:creator" content="@DavidWShadow" /> */}
      {/* https://ogp.me/ */}
      {/* <meta property="og:type" content="website" />
                    <meta property="og:title" content="PWA App" />
                    <meta property="og:description" content="Best PWA App in the world" />
                    <meta property="og:site_name" content="PWA App" />
                    <meta property="og:url" content="https://yourdomain.com" />
                    <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" /> */}

      {/* https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6 */}
      {/*
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
                    */}

      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
      />
    </>
  );
}
