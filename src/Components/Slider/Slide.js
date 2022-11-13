import Carousel from "react-material-ui-carousel";
import "./style.css";
import { LinkBtn } from "../btn/LinkBtn";

export function Slide() {
  let data = [
    {
      id: 1,
      mainTitle: "Women Collection 2021",
      subTitle: "NEW SEASON",
      img: "https://omarabualhija.github.io/CozaStore/images/slide-01.jpg",
    },
    {
      id: 2,
      mainTitle: "Men Collection 2021",
      subTitle: "JACKETS & COATS",
      img: "https://omarabualhija.github.io/CozaStore/images/slide-02.jpg",
    },
    {
      id: 3,
      mainTitle: "Men Collection 2021",
      subTitle: "NEW ARRIVALS",
      img: "https://omarabualhija.github.io/CozaStore/images/slide-03.jpg",
    },
  ];
  const Slider = () => (
    <Carousel
      className="postion"
      interval="3000"
      navButtonsProps={{
        style: {
          display: "none",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}
    >
      {data.map((e) => (
        <div key={e.id}>
          <img className=" vh100" src={e.img} alt="First slide" />
          <div className="title">
            <div>{e.mainTitle}</div>
            <div>{e.subTitle}</div>

            <LinkBtn to="/CozaStore/Shop"> Shope Now</LinkBtn>
          </div>
        </div>
      ))}
    </Carousel>
  );

  return <>{Slider()}</>;
}
