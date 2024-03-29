import Carousel from "react-material-ui-carousel";
import "./style.css";
import { LinkBtn } from "../btn/LinkBtn";
import React, { useState, useEffect } from "react";
import apis from "../../apis";
export function Slide() {
  const [data, setData] = useState([]);
  const getData = async () => {
    await apis.get(`/homeSlide`).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData()
  }, []);
  // let data = [
  //   {
  //     id: 1,
  //     mainTitle: "Women Collection 2021",
  //     subTitle: "NEW SEASON",
  //     img: "https://omarabualhija.github.io/CozaStore/images/slide-01.jpg",
  //   },
  //   {
  //     id: 2,
  //     mainTitle: "Men Collection 2021",
  //     subTitle: "JACKETS & COATS",
  //     img: "https://omarabualhija.github.io/CozaStore/images/slide-02.jpg",
  //   },
  //   {
  //     id: 3,
  //     mainTitle: "Men Collection 2021",
  //     subTitle: "NEW ARRIVALS",
  //     img: "https://omarabualhija.github.io/CozaStore/images/slide-03.jpg",
  //   },
  // ];
  const Slider = () => (
    <Carousel
      className="postion"
      interval="3000"
      navButtonsProps={{
        style: {
          display: "block",
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
          <img className=" vh100" src={`http://localhost:3000/${e.thumbnail}`} alt="First slide" />
          <div className="title">
            <div style={{color:"white"}}>{e.main_title}</div>
            <div style={{color:"white"}}>{e.sub_title}</div>

            <LinkBtn to="/CozaStore/Shop">Shop Now</LinkBtn>
          </div>
        </div>
      ))}
    </Carousel>
  );

  return <>{Slider()}</>;
}
