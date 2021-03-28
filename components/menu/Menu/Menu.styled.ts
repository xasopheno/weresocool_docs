import styled from "styled-components";

export const StyledMenu = styled.nav`
  flex-direction: column;
  justify-content: center;
  //background: ${({ theme }) => theme.primaryLight};

  background-color: #212121;
  border-left: 1px solid #383838;
  text-align: left;
  padding: 2rem;
  height: 100%;
  overflow-y: scroll;
  position: fixed;

  // @media (max-width: ${({ theme }) => theme.mobile}) {
  // width: 100%;
  // }
`;
export const MenuItem = styled.div`
  font-size: 1.5rem;
  //  text-transform: uppercase;
  padding: 0.5em 0 0 1em;
  font-weight: bold;
  letter-spacing: 0.15rem;
  //color: ${({ theme }) => theme.primaryDark};
  color: #edd;
  text-decoration: none;
  transition: color 0.3s linear;

  //  @media (max-width: ${({ theme }) => theme.mobile}) {
  //  font-size: 1.5rem;
  //  text-align: center;
  //  }

  &:hover {
    //color: ${({ theme }) => theme.primaryHover};
    color: #beb;
  }
`;
