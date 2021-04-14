import styled from "styled-components"

interface BurgerProps {
  open: boolean
}

export const StyledBurger = styled.button<BurgerProps>`
  position: fixed;
  bottom: 4%;
  right: 13%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  outline: none !important;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0) !important;

  span {
    width: 3.25rem;
    height: 0.5rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;
    background-color: goldenrod;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(30px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
