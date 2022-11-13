import React from "react";
import { TitleInImg } from "../../Components/TitleInImg/TitleInImg";
import { OurStore, AboutContainer } from "./Styled";
export function About() {
  return (
    <AboutContainer>
      <TitleInImg
        src="https://omarabualhija.github.io/CozaStore/images/bg-02.jpg"
        alt="about"
        titel="ABOUT"
      />
      <div className="container">
        <OurStore>
          <div>
            <h3>Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit. Donec gravida lorem elit, quis condimentum ex
              semper sit amet. Fusce eget ligula magna. Aliquam aliquam
              imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
              Pellentesque congue ac orci ut gravida. Aliquam erat volutpat.
              Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
              Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend
              elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut
              commodo efficitur, quam velit convallis ipsum, et maximus enim
              ligula ac ligula.
              <br /> <br /> <br /> Any questions? Let us know in store at 8th
              floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716
              6879
            </p>
          </div>
          <img
            src="https://omarabualhija.github.io/CozaStore/images/about-01.jpg"
            alt="about"
          />
        </OurStore>
        <OurStore>
          <div style={{ order: "2" }}>
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit. Donec gravida lorem elit, quis condimentum ex
              semper sit amet. Fusce eget ligula magna. Aliquam aliquam
              imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
              Pellentesque congue ac orci ut gravida. Aliquam erat volutpat.
              Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
              Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend
              elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut
              commodo efficitur, quam velit convallis ipsum, et maximus enim
              ligula ac ligula. Any questions? Let us know in store at 8th
              floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716
              6879
            </p>

            <q className="q">
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.<div>- Steve Job’s</div>
            </q>
          </div>
          <img
            style={{ order: "1" }}
            src="https://omarabualhija.github.io/CozaStore/images/about-02.jpg"
            alt="about"
          />
        </OurStore>
      </div>
    </AboutContainer>
  );
}
