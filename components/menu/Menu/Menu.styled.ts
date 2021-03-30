import styled from "styled-components"

export const StyledMenu = styled.nav`
  flex-direction: column;
  justify-content: center;
  background-color: #262523;
  border-left: 1px solid #272727;
  text-align: left;
  padding: 2rem;
  // height: 95%;
  width: 100%;
  overflow-y: scroll;
  position: fixed;
  padding-bottom: 10%;
`

export const MenuItem = styled.div`
  font-size: 1.25em;
  padding: 0.25em 0 0 1em;
  // font-weight: bold;
  // letter-spacing: 0.15rem;
  //color: ${({ theme }) => theme.primaryDark};
  color: #edd;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    //color: ${({ theme }) => theme.primaryHover};
    color: #beb;
  }
`
