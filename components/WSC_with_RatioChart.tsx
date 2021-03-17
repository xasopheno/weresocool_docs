import React from "react";
import { WereSoCool } from "./WereSoCool";
import { RatioChart } from "./RatioChart";

const language = `{ f: 440, l: 5, g: 1/2, p: 0 }\n
main = {
  Overlay [
    Fm 13/4,
    Fm 5/2,
    Fm 9/4,
    Fm 7/4,
    Fm 12/7,
    Fm 3/2,
    Fm 5/4,
    Fm 7/6,
    Fm 1/2,
  ]
}`;

export const WSCWithRatioChart = () => {
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
        <WereSoCool language={language} height={28} />
      </div>
      <div style={{ marginTop: "1.5em" }}>
        <RatioChart />
      </div>
    </div>
  );
};
