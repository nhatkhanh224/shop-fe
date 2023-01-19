import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { PRODUCTDETAILS, Select, Details, Description } from "./Styled.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Count } from "../../Components/CountUp/Count";
import { Button } from "../../Components/btn/Button";
import { SELECT } from "../../Components/MUI/SELECT";
import { CircularLading } from "../../Components/MUI/CircularLading";
import { getProductWithIdAction } from "../../Redux/Actions/Action";
import { Rating } from "../../Components/Rating/Rating";
import { addToCart } from "../../Redux/Actions/Action";
import { useCookies } from "react-cookie";
import apis from "../../apis";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./detail.css";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

export function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [cookies] = useCookies(["cookie-name"]);
  const user_id = Number(cookies.user_id);
  const [error, setError] = useState(false);
  const { loading, product } = useSelector((state) => state.SingleProduct);
  const { loading: LoadingToAddProduct } = useSelector(
    (state) => state.addToCart
  );
  const [option, setOption] = useState({
    id: id,
    Color: "",
    Size: "",
    qnt: 1,
    user_id: user_id || "",
  });
  const [image, setImage] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [recommendData, setRecommendData] = useState([]);
  console.log("------------>", recommendData);
  const getRecommendData = async () => {
    await apis.get(`/getRecommend/${user_id}`).then((res) => {
      setRecommendData(res.data);
    });
  };
  useEffect(() => {
    getRecommendData();
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const items = recommendData.map((item) => {
    return (
      <Link
        to={`/CozaStore/ProductDetails/${item.id}`}
        key={item.id}
        className="slide-item"
      >
        <div className="d-flex position-relative">
          <img
            src={`http://localhost:3000/${item.thumbnail}`}
            alt="img"
            className="image-slide"
          />
        </div>
        <div className="quick-button">
          <Button value="QUICK VIEW"></Button>
        </div>
        <div className="d-flex">
          <span
            style={{ color: "black", marginLeft: "auto", marginRight: "auto" }}
          >
            {item.price} đ
          </span>
          {/* <Rating rating={e.rating} /> */}
        </div>
      </Link>
    );
  });

  useEffect(() => dispatch(getProductWithIdAction(id)), [dispatch, id]);
  const handleAddProductView = () => {
    apis.post("/addProductView", {
      product_id: id,
      user_id,
    });
  };
  useEffect(() => {
    handleAddProductView();
  }, []);

  useEffect(() => {
    if (product.subImages) {
      let array = [
        {
          original: `http://localhost:3000/${product.thumbnail}`,
          thumbnail: `http://localhost:3000/${product.thumbnail}`,
        },
      ];
      for (let i = 0; i < product?.subImages.length; i++) {
        const element = product.subImages[i];
        array.push({
          original: `http://localhost:3000/${element.image}`,
          thumbnail: `http://localhost:3000/${element.image}`,
        });
      }
      setImage(array);
    }
  }, [product]);

  useEffect(() => {
    if (product.properties) {
      let arraySize = [];
      let arrayColor = [];
      for (let i = 0; i < product.properties.length; i++) {
        const element = product.properties[i];
        if (!arraySize.includes(element.size)) {
          arraySize.push(element.size);
        }
        if (!arrayColor.includes(element.color)) {
          arrayColor.push(element.color);
        }
      }
      setSize(arraySize);
      setColor(arrayColor);
    }
  }, [product]);

  const handelOption = (val, type) => {
    setError(false);
    setOption({ ...option, [type]: val });
  };

  const handelAddToCart = () => {
    if (option.Size.length !== 0 && option.Color.length !== 0) {
      dispatch(addToCart(option));
    } else setError(true);
  };

  return (
    <>
      {loading ? (
        <CircularLading />
      ) : (
        <>
          <PRODUCTDETAILS>
            <div className="container">
              <ImageGallery
                items={image}
                showFullscreenButton={false}
                additionalClass="slider-MW"
                showNav={false}
                thumbnailPosition="left"
                useBrowserFullscreen={false}
                showPlayButton={false}
                autoPlay={true}
              />

              <Details>
                <h4>{product.name}</h4>
                <span>{product.price} đ</span>
                {/* <Rating rating={product.rating}></Rating> */}
                {/* <div>{`Category :${product.category}`}</div> */}
                <Select>
                  <SELECT
                    id="Size"
                    label={"Size"}
                    options={size}
                    returnVal={(val) => handelOption(val, "Size")}
                  ></SELECT>
                  <SELECT
                    id="Color"
                    label={"Color"}
                    options={color}
                    returnVal={(val) => handelOption(val, "Color")}
                  ></SELECT>
                </Select>
                <Count
                  containerClass="containerBtn"
                  value={(val) => {
                    setOption({ ...option, qnt: val });
                  }}
                ></Count>
                {error && (
                  <div style={{ color: "red" }}>Add Your Color And Size </div>
                )}
                <Button
                  disabled={LoadingToAddProduct}
                  onClick={handelAddToCart}
                  value="ADD TO CART"
                />
              </Details>
            </div>
            <Description className="container">
              <h3>DESCRIPTION</h3>
              <div>{product.description}</div>
            </Description>
            <div className="container">
              <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={2000}
                animationDuration={2000}
                animationType="fadeout"
                mouseTracking
                infinite
                items={items}
                disableDotsControls
                responsive={responsive}
                controlsStrategy="alternate"
              />
            </div>
          </PRODUCTDETAILS>
        </>
      )}
    </>
  );
}
