import React from "react";

// This function runs on the server to add components to the <head> and before the <body>
export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // Add the Google Tag Manager script to the <head>
  setHeadComponents([
    <script
      key="gtm-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KK6Z54TR');
        `,
      }}
    />,
  ]);

  // Add the Google Tag Manager noscript iframe just after the opening <body> tag
  setPreBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KK6Z54TR"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>,
  ]);
};