import React from "react";

// This function runs on the server to add components to the <head>
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Google tag (gtag.js) script
    <script
      key="google-analytics-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-VF9GCJ93ZT"
    />,
    // Google Analytics dataLayer configuration
    <script
      key="google-analytics-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VF9GCJ93ZT');
        `,
      }}
    />,
  ]);
};