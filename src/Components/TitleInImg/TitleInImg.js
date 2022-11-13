import React from "react";
import { TitleImg } from "./styled";
export function TitleInImg({ src, alt, titel }) {
  return (
    <TitleImg>
      <img src={src} alt={alt} />
      <div>{titel}</div>
    </TitleImg>
  );
}
