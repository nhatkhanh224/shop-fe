import React from "react";
import { Wraper } from "./styled";
import { Link } from "react-router-dom";
export const LinkBtn = ({ children, customClass = "", to = "#" }) => {
  return (
    <Wraper>
      <Link className={`btnStyle ${customClass}`} to={to}>
        {children}
      </Link>
    </Wraper>
  );
};
