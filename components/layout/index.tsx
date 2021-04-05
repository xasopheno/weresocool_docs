import { ReactChild, ReactChildren } from "react"
import { Box, Grid, ThemeProvider } from "theme-ui"
import { useWindowSize } from "../../utils/useWindowSize"
import { Menu } from "../menu"
import { MenuDatum } from "../menu/menus"
import { theme } from "./theme"

export default function Layout({
  children,
  menuData,
  sectionPath,
}: {
  children: ReactChild | ReactChildren
  menuData: MenuDatum[]
  sectionPath: string
}) {
  const { isMobile } = useWindowSize()

  return (
    <ThemeProvider theme={theme}>
      {isMobile ? (
        <Grid
          style={{
            marginLeft: "1%",
            marginRight: "1%",
          }}
          columns={[1]}
        >
          <Box style={{ overflowX: "hidden", height: "100%" }}>{children}</Box>
          <Box>
            <Menu
              data={menuData}
              sectionPath={sectionPath}
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
          columns={[2, "7fr 3fr"]}
          // columns={[2, "3fr 1fr"]}
        >
          <Box
            style={{
              overflow: "auto",
              height: "calc(100vh - 60px)",
              marginTop: "50px",
            }}
          >
            {children}
          </Box>

          <Box>
            <Menu
              data={menuData}
              sectionPath={sectionPath}
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
