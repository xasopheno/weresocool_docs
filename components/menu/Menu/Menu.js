import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} {...props}>
      <a href="/play/arcs" tabIndex={tabIndex}>
        What?
      </a>
      <a href="/thursday" tabIndex={tabIndex}>
        Thurdays!
      </a>
      <a href="/who" tabIndex={tabIndex}>
        Who.
      </a>
    </StyledMenu>
  );
};

export default Menu;
