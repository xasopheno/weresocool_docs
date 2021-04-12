import styled from "styled-components"

export const StyledMenu = styled.nav`
  flex-direction: column;
  justify-content: center;
  background-color: #262523;
  border-left: 1px solid #272727;
  text-align: left;
  padding: 20px;
  height: 100%;
  width: calc(0.29 * 100vw);
  scrollbar-color: goldenrod;
  overflow-y: scroll;
  position: fixed;
  padding-bottom: 10%;
`

export const MenuItem = styled.div<{ selected: boolean }>`
  font-size: 1.25em;
  padding: 0.25em 0 0 1em;
  color: #edd;
  text-decoration: none;
  transition: color 0.3s linear;

  font-weight: ${({ selected }) => (selected ? "700" : "300")};

  &:hover {
    color: goldenrod;
  }

  &:active {
    opacity: 70%;
  }
`

export const SelectedMenuItem = styled.span`
  width: 7px;
  height: 30px;
  border-left: 8px solid goldenrod;
  padding-left: 6px;
  position: absolute;
  left: 0px;
  margin-top: -3px;
`
