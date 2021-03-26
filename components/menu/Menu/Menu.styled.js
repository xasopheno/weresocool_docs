import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //background: ${({ theme }) => theme.primaryLight};

  background-color: #202020;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  border-width: 1em;
  border-color: goldenrod;
  border: solid;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s ease-in-out;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    //  text-transform: uppercase;
    padding: 0.5rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    //color: ${({ theme }) => theme.primaryDark};
    color: #edd;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      //color: ${({ theme }) => theme.primaryHover};
      color: #beb;
    }
  }
`;
