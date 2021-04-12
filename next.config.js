module.exports = {
  webpack(config) {
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
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
};
