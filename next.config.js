module.exports = {
  webpack(config) {
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "Origin-Trial",
            value:
              "AuzejKtwfDEPCLoYvY1PzI439qF1qRLhttXBYEmYNWK6QBsc6eDm0Uyhl+CRJVRDpnBhEROC+z7PLxpAdJqlkwwAAAB8eyJvcmlnaW4iOiJodHRwczovL3d3dy53ZXJlc29jb29sLm9yZzo0NDMiLCJmZWF0dXJlIjoiVW5yZXN0cmljdGVkU2hhcmVkQXJyYXlCdWZmZXIiLCJleHBpcnkiOjE2MzM0NzgzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
          },
          //  {
          //  key: "Cross-Origin-Embedder-Policy",
          //  value: "require-corp",
          //  },
          //  {
          //  key: "Cross-Origin-Opener-Policy",
          //  value: "same-origin",
          //  },
        ],
      },
    ];
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'pt', 'pseudo'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',

    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    ignoreRoutes: [
        '/tv',
        '/interviews'
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    })

    return config
  },
};

