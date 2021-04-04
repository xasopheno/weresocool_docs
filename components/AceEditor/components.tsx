import { IMarker } from "react-ace"
import styled from "styled-components"

export const Container = styled.div<{ numLines: number }>`
  margin-bottom: 20px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: ${(props) => {
    if (props.numLines === -1) {
      return 840
    } else {
      return props.numLines * (props.numLines > 10 ? 1.5 : 1.7) * 20
    }
  }}px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  width: 8em;
  height: 2em;
  background-color: goldenrod;
`

export const ErrorContainer = styled.p`
  width: 100%;
  text-align: center;
  background-color: #454343;
  color: ${(props) => props.color};
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  color: mistyrose;
`

export enum ResponseType {
  ParseError = "ParseError",
  IdError = "IdError",
  IndexError = "IndexError",
  MsgError = "Msg",
}

export const makeMarker = (
  line: number,
  column: number,
  n_lines: number
): IMarker => {
  line -= 1
  return {
    startRow: line,
    startCol: column,
    endRow: n_lines,
    endCol: 0,
    type: "text",
    className: "error",
  }
}
