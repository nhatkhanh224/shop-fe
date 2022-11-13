import React, { useState, useEffect } from "react";
import { Products, Filters, Cards, Search, btnLoadMore } from "./Styled";
import { Link } from "react-router-dom";
import { Button } from "../btn/Button";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../Redux/Actions/Action";
import Skeleton from "@mui/material/Skeleton";
import { Rating } from "../Rating/Rating";
import apis from '../../apis';

export function Prodacts(props) {
  const dispatch = useDispatch();
  const [toggleFilter, setToggleFilter] = useState(false); //to Show serch box
  const { loading, data } = useSelector((state) => state.productData); //get card product data
  const [activeFilter, setActiveFilter] = useState("All Products"); //btn filter
  const [limit, setLimit] = useState(4);
  const [type, setType] = useState("");
  const [categories, setCategories] = useState([]);
  //func search box

  useEffect(() => {
    dispatch(listProductAction());
    getCategories();
  }, [dispatch]);

  //function btn filter
  const handelFilter = (e) => {
    const category = e.target.dataset.category;
    setType(category);
    setActiveFilter(category);
    dispatch(listProductAction(category, limit));
  };

  const handleLimitation = () => {
    const add = limit + 4;
    setLimit(add);
    dispatch(listProductAction(type, add));
  };

  const getCategories = () => {
    apis.get('/category')
    .then(res => {
      setCategories(res.data)
    })
  }

  // func. jsx => display data
  const displayProduct = () => (
    <>
      <Cards>
        {(loading ? Array.from(new Array(12)) : data).map((e, i) => (
          <>
            {e ? (
              <Link to={`/CozaStore/ProductDetails/${e.id}`} key={e.id}>
                <div>
                  <img src={e.thumbnail} alt="img" />
                  <Button customClass="Quickbutton" value="QUICK VIEW"></Button>
                </div>
                <div>
                  {/* <h4>{e.category}</h4> */}
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
      </Cards>
      <div style={{ width: "0", margin: "20px auto" }}>
        <Button
          customClass="m-y"
          value="Show More"
          onClick={handleLimitation}
        ></Button>
      </div>
    </>
  );

  //func jsx filter
  const Filter = () => (
    <>
      <Filters>
        <div>
          {/*//Filter Type} */}
          <span
            data-category=""
            className={activeFilter === "All Products" ? "active" : ""}
            onClick={handelFilter}
          >
            All Products
          </span>
          {
            categories && categories.map((item,index)=>{
              return <span
            key={item.id}
            data-category={item.id}
            className={activeFilter === item.id ? "active" : ""}
            onClick={handelFilter}
          >
            {item.name}
          </span>
            })
          }
          
          {/* <span
            data-category="men's clothing"
            className={activeFilter === "men's clothing" ? "active" : ""}
            onClick={handelFilter}
          >
            Men
          </span>
          <span
            data-category="jewelery"
            className={activeFilter === "jewelery" ? "active" : ""}
            onClick={handelFilter}
          >
            Accessories
          </span>
          <span
            data-category="electronics"
            className={activeFilter === "electronics" ? "active" : ""}
            onClick={handelFilter}
          >
            Electronics
          </span> */}
        </div>
        {/* <div>
          <button
            onClick={() => setToggleFilter(!toggleFilter)}
            className={!toggleFilter ? "fas fa-search" : " fas fa-times "}
          >
            Search
          </button>
        </div> */}
      </Filters>

      {/* <Search className={toggleFilter ? "show" : ""}>
        <i className="fas fa-search"></i>
        <input type="search" placeholder="Search here !"></input>
      </Search> */}
    </>
  );

  return (
    <>
      <Products>
        <div className="container">
          <h2>PRODUCT OVERVIEW</h2>
          {Filter()}
          {displayProduct()}
        </div>
      </Products>
    </>
  );
}
