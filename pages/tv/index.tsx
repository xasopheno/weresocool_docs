import Youtube from "../../components/youtube"
import styled from "styled-components"
import React from "react"
import { Box, Grid } from "theme-ui"
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
        TV
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
