import styled from "styled-components";

export const MobileStyledMenu = styled.nav<{ open: boolean }>`
  flex-direction: column;
  justify-content: center;
  width: 100%;

  background-color: #202020;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-110%)")};
  border-width: 1em;
  border: 1px solid;
  text-align: left;
  padding: 2rem;
  padding-bottom: 80px;
  margin-top: 60px;
  position: fixed;
  height: calc(100vh - 60px);
  overflow: scroll;
  top: 0;
  left: 0;
  z-index: 100;
  transition: transform 0.1s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
export const MenuItem = styled.div`
  font-size: 1.5rem;
  //  text-transform: uppercase;
  padding: 0.5rem 0;
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
