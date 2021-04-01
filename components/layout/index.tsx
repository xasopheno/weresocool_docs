import { ReactChild, ReactChildren } from "react"
import { Box, Grid, ThemeProvider } from "theme-ui"
import { useWindowSize } from "../../utils/useWindowSize"
import { Menu } from "../menu"
import { tutorialMenu } from "../menu/menus"
import { theme } from "./theme"

export default function Layout({
  children,
}: {
  children: ReactChild | ReactChildren
}) {
  const windowSize = useWindowSize()

  return (
    <ThemeProvider theme={theme}>
      {windowSize.width! < 1000 ? (
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
              data={tutorialMenu}
              style={{
                position: "fixed",
                maxHeight: "100%",
                height: "100%",
                overflow: "scroll",
              }}
            />
          </Box>
        </Grid>
      ) : (
        <Grid
          style={{
            marginLeft: "8%",
          }}
          columns={[2, "3fr 1fr"]}
        >
          <Box style={{ overflow: "auto", height: "95%", marginTop: "5%" }}>
            {children}
          </Box>

          <Box>
            <Menu
              data={tutorialMenu}
              style={{
                overflow: "scroll",
                paddingBottom: "2em",
              }}
            />
          </Box>
        </Grid>
      )}
    </ThemeProvider>
  )
}
