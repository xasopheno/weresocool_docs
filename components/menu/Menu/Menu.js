import React from "react";
import { MenuItem, StyledMenu } from "./Menu.styled";
import { capitalize, useStopAndWait } from "../../../utils/misc";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const post = router.asPath.split("/").slice(-1)[0];
  const stopAndWait = useStopAndWait();

  return (
    <div>
      <StyledMenu open={open} {...props}>
        <h1>Documentation</h1>
        <MenuItem
          onClick={async () => {
            await stopAndWait();
            router.push(`/posts/documentation`);
            props.setOpen(false);
          }}
          tabIndex={tabIndex}
        >
          {`${post === "documentation" ? ">" : ""} WereSoCool Docs`}
        </MenuItem>
        <h1>Tutorials</h1>
        {tutorials.map((tutorial, idx) => {
          return (
            <MenuItem
              key={idx}
              onClick={async () => {
                await stopAndWait();
                router.push(`/posts/${tutorial}`);
                props.setOpen(false);
              }}
              tabIndex={tabIndex}
            >
              {`${post === tutorial ? ">" : ""} ${capitalize(tutorial)}`}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
};

export default Menu;
