import React from "react";
import { Button } from "../../Components/btn/Button";
import { Contactt, ContactBox, EmailBox, AdressBox } from "./Styled.js";
import { TitleInImg } from "../../Components/TitleInImg/TitleInImg";
export function Contact() {
  return (
    <Contactt>
      <TitleInImg
        src="https://omarabualhija.github.io/CozaStore/images/bg-01.jpg"
        alt="Contact"
        titel="Contact"
      />
      <div className="container">
        <ContactBox>
          <EmailBox>
            <h4>Send Us A Message</h4>
            <form>
              <div>
                <i className="far fa-envelope"></i>
                <input type="email" placeholder="Your Email Address !"></input>
              </div>
              <textarea placeholder="How Can We Help" />
              <Button type="submit" value="SUBMIT"></Button>
            </form>
          </EmailBox>
          <AdressBox>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>
                  Khu Đô thị Đại học Đà Nẵng, Đường Nam Kỳ Khởi Nghĩa, quận Ngũ Hành Sơn, TP. Đà Nẵng
                </p>
              </div>
            </div>
            <div>
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Lets Talk</h4>
                <a href="tel:1234567890">1234567890</a>
              </div>
            </div>
            <div>
              <i className="far fa-envelope"></i>
              <div>
                <h4>Sale Support</h4>
                <a href="nnkhanh.18it5@vku.udn.vn">nnkhanh.18it5@vku.udn.vn</a>
                <a href="bvahuy.18it5@vku.udn.vn">bvahuy.18it5@vku.udn.vn</a>
              </div>
            </div>
          </AdressBox>
        </ContactBox>
      </div>
    </Contactt>
  );
}
