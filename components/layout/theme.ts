export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 17, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 1000,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: 'rgb(236, 224, 204)',
    background: '#212121',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
        letterSpacing: 'normal',
        padding: '0.3em',
        backgroundColor: '#373737',
      },
      h1: {
        textDecoration: 'underline',
      },
      h2: {
        textDecoration: 'underline',
      },
      h3: {
        textDecoration: 'underline',
      },
    },
  },
};
