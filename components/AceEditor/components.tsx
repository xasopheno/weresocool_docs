import { IMarker } from "react-ace"
import styled from "styled-components"

export const Container = styled.div<{ editorHeight: number }>`
  margin-bottom: 20px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: ${(props) => {
    return props.editorHeight
  }}px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 1rem;
  width: 5rem;
  height: 2rem;
  background-color: goldenrod;

  // outline: none !important;
  // box-shadow: none !important;

  &:active {
    opacity: 70%;
    // border: 2px solid white;
  }

  :focus {
    outline: 1px solid darkgoldenrod;
  }

  &:hover {
    border: 2px solid white;
    cursor: pointer;
  }
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
