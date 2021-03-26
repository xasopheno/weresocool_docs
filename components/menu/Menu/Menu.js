import React from "react";
import { StyledMenu } from "./Menu.styled";
import { capitalize } from "../../../utils/misc";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const tutorials = [
    "welcome",
    "overtones",
    "overlay",
    "point_operations",
    "pipe_operations",
    "pipe_and_sequence",
    "small_differences",
    "o_operation",
    "fit_length",
    "modulate_by",
    "functions",
    "intro_to_lists",
    "equal_temperament",
    "indices",
    "generators",
    "expressive_generators",
    "cool_coefficients",
  ];

  return (
    <div>
      <StyledMenu open={open} {...props}>
        <h1>Documentation</h1>
        <a href="/posts/documentation" tabIndex={tabIndex}>
          WereSoCool Docs
        </a>
        <h1>Tutorials</h1>
        {tutorials.map((tutorial, idx) => {
          return (
            <a key={idx} href={`/posts/${tutorial}`} tabIndex={tabIndex}>
              {capitalize(tutorial)}
            </a>
          );
        })}
      </StyledMenu>
    </div>
  );
};

export default Menu;
