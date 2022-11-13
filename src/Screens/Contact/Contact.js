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
                  Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                  US
                </p>
              </div>
            </div>
            <div>
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Lets Talk</h4>
                <a href="tel:0796918885">962796918885</a>
              </div>
            </div>
            <div>
              <i className="far fa-envelope"></i>
              <div>
                <h4>Sale Support</h4>
                <a href="mailto:omar.hija12@gmail.com">omar.hija12@gmail.com</a>
              </div>
            </div>
          </AdressBox>
        </ContactBox>
      </div>
    </Contactt>
  );
}
