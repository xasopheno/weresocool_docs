import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 1%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline: none !important;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0) !important; // Or none

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;
    background-color: #edd;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
