module.exports = {
  webpack(config) {
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm"
    return config
  },
  target: "serverless",
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/tutorials/:path*{/}?",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
      {
        source: "/tv/:path*{/}?",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "unsafe-none",
          },
        ],
      },
    ]
  },
}
