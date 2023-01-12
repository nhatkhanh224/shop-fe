import React, { useState, useEffect } from "react";
import { Products, Filters, Cards, Search, btnLoadMore } from "./Styled";
import { Link } from "react-router-dom";
import { Button } from "../btn/Button";
import { useDispatch, useSelector } from "react-redux";
import { listProductRecommendAction } from "../../Redux/Actions/Action";
import Skeleton from "@mui/material/Skeleton";
import { Rating } from "../Rating/Rating";
import apis from '../../apis';
import { useCookies } from "react-cookie";

export function Recommend(props) {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.productDataReducer); //get card product data
  const [limit, setLimit] = useState(4);
  const [type, setType] = useState("");
  const [cookies] = useCookies(["cookie-name"]);
  const user_id = cookies.user_id;
  //func search box

  useEffect(() => {
    if (user_id) {
      dispatch(listProductRecommendAction(user_id));
    } else {
      dispatch(listProductRecommendAction(0));
    }
  }, [dispatch]);

  //function btn filter

  // const handleLimitation = () => {
  //   const add = limit + 4;
  //   setLimit(add);
  //   dispatch(listProductRecommendAction(type, add));
  // };

  // func. jsx => display data
  const displayProduct = () => (
    <>
      <Cards>
        <div className="row mt-4">
          {(loading ? Array.from(new Array(12)) : data).map((e, i) => (
            <>
              {e ? (
                <Link to={`/CozaStore/ProductDetails/${e.id}`} key={e.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35">
                  <div>
                    <img src={`http://localhost:3000/${e.thumbnail}`} alt="img" />
                    <Button customClass="Quickbutton" value="QUICK VIEW"></Button>
                  </div>
                  <div>
                    {/* <h4>{}</h4> */}
                    <span>{e.price} đ</span>
                    {/* <Rating rating={e.rating} /> */}
                  </div>
                </Link>
              ) : (
                <Cards key={i}>
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: 1 }}
                    height={118}
                  />
                  <Skeleton />
                  <Skeleton />
                </Cards>
              )}
            </>
          ))}
        </div>
      </Cards>
      {/* <div style={{ width: "0", margin: "20px auto", display: 'flex', justifyContent: 'center'}}>
        <Button 
          customClass="m-y"
          value="Load More"
          // onClick={handleLimitation}
        ></Button>
      </div> */}
    </>
  );
  return (
    <>
      <Products>
        <div className="container">
          <h2>RECOMMEND FOR YOU </h2>
          {displayProduct()}
        </div>
      </Products>
    </>
  );
}
