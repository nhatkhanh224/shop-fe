import React from "react";
import { Wraper } from "./styled";

import CircularProgress from "@mui/material/CircularProgress";

export const Button = ({
  type = "button",
  value = "Click ",
  customClass = "",
  onClick,
  disabled = false,
  to = "#",
}) => {
  return (
    <Wraper>
      {disabled ? (
        <CircularProgress></CircularProgress>
      ) : (
        <input
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`btnStyle ${customClass}`}
          value={value}
        />
      )}
    </Wraper>
  );
};
