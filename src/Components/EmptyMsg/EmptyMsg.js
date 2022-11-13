import React from "react";
import { Link } from "react-router-dom";
import { EMPTY } from "./styled";
export function EmptyMsg() {
  return (
    <EMPTY className="container">
      <span>Hello</span>
      <div>Thank You For Visiting Koza Store </div>
      <div>Please shop some products and come Back Here ...</div>

      <div>
        If you want to contact us, please
        <Link to="/Contact"> {""}click here </Link>
      </div>
      <div> We are here to serve you with love</div>
      <div>We wish you a pleasant shopping</div>
    </EMPTY>
  );
}
