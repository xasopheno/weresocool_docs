import Youtube from "../../components/youtube"
import styled from "styled-components"
import React from "react"
import { Box, Grid } from "theme-ui"
import { Menu } from "../../components/menu"
import { tvMenu } from "../../components/menu/menus"

const Wrapper = styled.div`
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
`

const TV = () => {
  return (
    <Grid
      style={{
        marginLeft: "8%",
      }}
      columns={[2, "3fr 2fr"]}
    >
      <Box
        style={{
          overflow: "auto",
          height: "calc(100vh - 60px)",
          marginTop: "50px",
        }}
      >
        <Wrapper>
          <Youtube code={"ikGA9wDE9nM"} />
        </Wrapper>
      </Box>

      <Box>
        <div
          style={{
            overflow: "scroll",
            paddingBottom: "2em",
          }}
        >
          test
        </div>
      </Box>
    </Grid>
  )
}

export default TV
