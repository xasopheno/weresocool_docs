import styled from "styled-components"

export const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  background-color: #282825;
  border-bottom: 1px solid #272727;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 60px;
  text-align: center;
  padding-left: 5%;
`

export const NavItem = styled.p<{ selected: boolean }>`
  padding: 0 10px 0 10px;
  line-height: 50px;
  align-self: center;
  font-weight: 300;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px 0 10px;
  margin-bottom: -6px;

  :active {
    background-color: #313131;
  }

  border-bottom: ${({ selected }) =>
    selected ? "6px solid goldenrod" : "6px solid transparent;"};
`

export const LogoText = styled.p`
  padding: 0 20px 0 20px;
  line-height: 60px;
  align-self: center;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px 0 0;
  color: goldenrod;
`

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`
