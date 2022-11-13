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
export function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [error, setError] = useState(false);
  const { loading, product } = useSelector((state) => state.SingleProduct);
  console.log(product);
  const { loading: LoadingToAddProduct } = useSelector(
    (state) => state.addToCart
  );
  const [option, setOption] = useState({
    id: id,
    Color: "",
    Size: "",
    qnt: 1,
  });

  useEffect(
    () => dispatch(getProductWithIdAction(id)),

    [dispatch, id]
  );

  const image = [
    {
      original: product.thumbnail,
      thumbnail: product.thumbnail,
    },
  ];

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
                    options={["S", " M", "L", "XL"]}
                    returnVal={(val) => handelOption(val, "Size")}
                  ></SELECT>
                  <SELECT
                    id="Color"
                    label={"Color"}
                    options={["Red", "Blue", "White", "Grey"]}
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
          </PRODUCTDETAILS>
        </>
      )}
    </>
  );
}
