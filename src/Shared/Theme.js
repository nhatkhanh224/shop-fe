import { createGlobalStyle } from "styled-components";

export const darck = {
  backgroundColor: "rgb(24,25,26)",
  altbackgroundColor: "#3A3B3C",
  color: "#878b8f",
};

export const light = {
  backgroundColor: "white",
  altbackgroundColor: "#3A3B3C",
  color: "#3A3B3C",
  altColor: "#555",
};

export const GlobelStyle = createGlobalStyle`   

body{
    color:${({ theme }) => theme.color};
background-color: ${({ theme }) => theme.backgroundColor};
}
`;

export const mainColor = {
  purple: "#717fe0",
};
