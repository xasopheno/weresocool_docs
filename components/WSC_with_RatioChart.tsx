import React from "react"
import { WereSoCool } from "./WereSoCool"
import { RatioChart } from "./RatioChart"
//@ts-ignore
import useMobileDetect from "use-mobile-detect-hook"

export const WSCWithRatioChart = (props: { language: string }) => {
  const detectMobile = useMobileDetect()
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <WereSoCool language={props.language} height={28} />
      </div>
      {!detectMobile.isMobile && (
        <div style={{ marginTop: "1.5em" }}>
          <RatioChart />
        </div>
      )}
    </div>
  )
}
