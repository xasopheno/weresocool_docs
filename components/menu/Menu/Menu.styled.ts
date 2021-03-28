import styled from "styled-components";

export const StyledMenu = styled.nav`
  flex-direction: column;
  justify-content: center;
  background-color: #212121;
  border-left: 1px solid #272727;
  text-align: left;
  padding: 2rem;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: fixed;
`;

export const MenuItem = styled.div`
  font-size: 1.25rem;
  //  text-transform: uppercase;
  padding: 0.25em 0 0 1em;
  font-weight: bold;
  letter-spacing: 0.15rem;
  //color: ${({ theme }) => theme.primaryDark};
  color: #edd;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    //color: ${({ theme }) => theme.primaryHover};
    color: #beb;
  }
`;
