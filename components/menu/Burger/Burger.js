import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
