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
        <div className="row">
          <Categories className="col-sm-6 col-lg-3">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/">Women</Link></li>
              <li><Link to="/">Men</Link></li>
              <li><Link to="/">Accessories</Link></li>
            </ul>
          </Categories>

          <Contact className="col-sm-6 col-lg-3">
            <h4>Contact US</h4>
            <ul>
              <li>
                <a
                  _blank="true"
                  className="fab fa-facebook-square"
                  href="http://facebook.com"
                  alt="facebook"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  className="fab fa-instagram-square"
                  href="http://instagram.com"
                  _blank="true"
                  alt="instagram"
                  >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  className="fab fa-twitter-square"
                  href="http://twitter.com"
                  _blank="true"
                  alt="twitter"
                >
                  {" "}
                </a>
              </li>
            </ul>
          </Contact>

          <GetIntouch className="col-sm-6 col-lg-3">
            <h4>GET IN TOUCH</h4>
            <p>
            Khu Đô thị Đại học Đà Nẵng, Đường Nam Kỳ Khởi Nghĩa, quận Ngũ Hành Sơn, TP. Đà Nẵng
            </p>
          </GetIntouch>
          
          <Newsletter className="col-sm-6 col-lg-3">
              <h4>NEWSLETTER</h4>
              <form>
                <div>
                  <input type="email" placeholder="example@email.com" />
                  <div></div>
                </div>
                <div>
                  <Button customClass="Submit" type="submit" value="SUBSCRIBE" />
                </div>
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
                Copyright &#169; 2022 All rights reserved | Made with &#9829; by
                <a
                  className="color"
                  href="#"
                >
                  {" "}
                  Nhật Khánh & Anh Huy
                </a>
              </p>
            </Copyright>

          </div>
        </div>
    </FOOTER>
  );
};
