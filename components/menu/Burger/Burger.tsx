import React from "react"
import { StyledBurger } from "./Burger.styled"

interface BurgerProps extends React.HTMLAttributes<Element> {
  open: boolean
  setOpen: (open: boolean) => void
}

const Burger = ({ open, setOpen, ...props }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burger
