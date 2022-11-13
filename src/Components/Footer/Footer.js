import { Link } from "react-router-dom";
import { Button } from "../btn/Button";
import {
  FOOTER,
  Categories,
  GetIntouch,
  Contact,
  Newsletter,
  Copyright,
} from "./styled";

export const Footer = () => {
  return (
    <FOOTER>
      <div className="container">
        <Categories>
          <h4>Categories</h4>
          <Link to="/">Women</Link>
          <Link to="/">Men</Link>
          <Link to="/">Accessories</Link>
        </Categories>

        <Contact>
          <h4>Contact US</h4>
          <a
            _blank="true"
            className="fab fa-facebook-square"
            href="http://facebook.com"
            alt="facebook"
          >
            {" "}
          </a>
          <a
            className="fab fa-instagram-square"
            href="http://instagram.com"
            _blank="true"
            alt="instagram"
          >
            {" "}
          </a>
          <a
            className="fab fa-twitter-square"
            href="http://twitter.com"
            _blank="true"
            alt="twitter"
          >
            {" "}
          </a>
        </Contact>

        <GetIntouch>
          <h4>GET IN TOUCH</h4>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018
          </p>
        </GetIntouch>
        <Newsletter>
          <h4>NEWSLETTER</h4>
          <form>
            <input type="email" placeholder="example@email.com" />
            <Button customClass="Submit" type="submit" value="SUBSCRIBE" />
          </form>
        </Newsletter>
        <Copyright>
          <div>
            <img
              src="https://omarabualhija.github.io/CozaStore/images/icons/icon-pay-01.png"
              alt="paypal"
            />
            <img
              src="https://omarabualhija.github.io/CozaStore/images/icons/icon-pay-02.png"
              alt="Visa"
            />
            <img
              src="https://omarabualhija.github.io/CozaStore/images/icons/icon-pay-03.png"
              alt="masterCard"
            />
            <img
              src="https://omarabualhija.github.io/CozaStore/images/icons/icon-pay-04.png"
              alt="cashmone"
            />
            <img
              src="https://omarabualhija.github.io/CozaStore/images/icons/icon-pay-05.png"
              alt="zaincash"
            />
          </div>

          <p>
            Copyright &#169; 2021 All rights reserved | Made with &#9829; by
            <a
              className="color"
              href="https://www.linkedin.com/in/omar-abu-alhija-a00a251a1/"
            >
              {" "}
              Omar Abu alhija
            </a>
          </p>
        </Copyright>
      </div>
    </FOOTER>
  );
};
