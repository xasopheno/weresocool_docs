module.exports = {
  webpack(config) {
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm"
    return config
  },
  async headers() {
    return [
      {
        source: "/:path*{/}?",
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
    ]
  },
}
