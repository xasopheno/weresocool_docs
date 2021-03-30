import { Box, Grid, ThemeProvider } from "theme-ui"
import { useState, useEffect } from "react"
import { useWindowSize } from "../utils/useWindowSize"
import { Menu } from "./menu"
import styled from "styled-components"

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 17, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#EFFFFA",
    background: "#212121",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    p: { variant: "text.p", fontSize: 2 },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}

export default function Layout({ children }) {
  const windowSize = useWindowSize()

  return (
    <ThemeProvider theme={theme}>
      {windowSize.width < 1000 ? (
        <Grid
          style={{
            marginLeft: "4%",
            marginRight: "4%",
          }}
          columns={[1]}
        >
          <Box style={{ overflow: "auto", height: "100%" }}>{children}</Box>
          <Box>
            <Menu
              style={{
                position: "fixed",
                maxHeight: "100%",
                height: "100%",
                overflow: "scroll",
              }}
              open={true}
              setOpen={() => {}}
            />
          </Box>
        </Grid>
      ) : (
        <Grid
          style={{
            //  maxWidth: "90%",
            marginLeft: "8%",
            //  padding: "1.5rem",
          }}
          columns={[2, "3fr 1fr"]}
        >
          <Box style={{ overflow: "auto", height: "95%", marginTop: "5%" }}>
            {children}
          </Box>

          <Box>
            <Menu
              style={{
                maxHeight: "95%",
                overflow: "scroll",
                paddingBottom: "2em",
              }}
              open={true}
              setOpen={() => {}}
            />
          </Box>
        </Grid>
      )}
    </ThemeProvider>
  )
}
