import React, { useState, useEffect } from "react";
import { Products, Filters, Cards, Search, btnLoadMore } from "./Styled";
import { Link } from "react-router-dom";
import { Button } from "../btn/Button";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../Redux/Actions/Action";
import Skeleton from "@mui/material/Skeleton";
import { Rating } from "../Rating/Rating";
import apis from "../../apis";
import Form from "react-bootstrap/Form";
import "./prodacts.css";

export function Prodacts(props) {
  const dispatch = useDispatch();
  const [toggleFilterSearch, setToggleFilterSearch] = useState(false); //to Show serch box
  const [toggleFilter, setToggleFilter] = useState(false);
  const { loading, data } = useSelector((state) => state.productData); //get card product data
  const [activeFilter, setActiveFilter] = useState("All Products"); //btn filter
  const [limit, setLimit] = useState(10);
  const [type, setType] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortBy,setSortBy] = useState("");
  const [filterColor,setFilterColor] = useState("");
  const [filterPrice,setFilterPrice] = useState("");

  //func search box

  useEffect(() => {
    dispatch(listProductAction());
    getCategories();
  }, [dispatch]);

  useEffect(() => {
    if (activeFilter && activeFilter !== "All Products") {
      getSubCategories();
    }
  }, [activeFilter]);

  //function btn filter
  const handelFilter = (e) => {
    const category = e.target.dataset.category;
    setType(category);
    setActiveFilter(category);
    dispatch(listProductAction(category, limit));
  };
  const handelFilterSubCategory = (id) => {
    const category = id;
    setType(category);
    dispatch(listProductAction(category, limit));
  };

  const handleLimitation = () => {
    const add = limit + 10;
    setLimit(add);
    dispatch(listProductAction(type, add));
  };
  const handleSortBy = (sort_by) => {
    setSortBy(sort_by);
    dispatch(listProductAction(type, limit,sort_by,filterColor,filterPrice));
  };
  const handleFilterPrice = (filterPrice) => {
    setFilterPrice(filterPrice);
    dispatch(listProductAction(type, limit,sortBy,filterColor,filterPrice));
  };
  const handleFilterColor = (filterColor) => {
    setFilterColor(filterColor);
    dispatch(listProductAction(type, limit,sortBy,filterColor,filterPrice));
  };

  const getCategories = () => {
    apis.get("/category/0").then((res) => {
      setCategories(res.data);
    });
  };
  const getSubCategories = () => {
    apis.get(`/category/${activeFilter}`).then((res) => {
      setSubCategories(res.data);
    });
  };

  // func. jsx => display data
  const displayProduct = () => (
    <>
      <Cards>
        <div className="row mt-4">
          {(loading ? Array.from(new Array(12)) : data).map((e, i) => (
            <>
              {e ? (
                <Link
                  to={`/CozaStore/ProductDetails/${e.id}`}
                  key={e.id}
                  className="col-sm-6 col-md-4 col-lg-3 p-b-35"
                >
                  <div>
                    <img
                      src={`http://localhost:3000/${e.thumbnail}`}
                      alt="img"
                    />
                    <Button
                      customClass="Quickbutton"
                      value="QUICK VIEW"
                    ></Button>
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
      <div
        style={{
          width: "0",
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          customClass="m-y"
          value="Load More"
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
            className={
              activeFilter === "All Products" || activeFilter === ""
                ? "active"
                : ""
            }
            onClick={handelFilter}
          >
            All Products
          </span>
          {categories &&
            categories.map((item, index) => {
              return (
                <span
                  key={item.id}
                  data-category={item.id}
                  className={activeFilter == item.id ? "active" : ""}
                  onClick={handelFilter}
                >
                  {item.name}
                </span>
              );
            })}

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
        {
          <div>
            <button
              onClick={() => {
                setToggleFilterSearch(false);
                setToggleFilter(!toggleFilter);
              }}
              className={!toggleFilter ? "fas fa-filter" : " fas fa-times"}
              style={{ marginRight: "10px" }}
            >
              Filter
            </button>
            <button
              onClick={() => {
                setToggleFilter(false);
                setToggleFilterSearch(!toggleFilterSearch);
              }}
              className={!toggleFilter ? "fas fa-search" : " fas fa-times"}
            >
              Search
            </button>
          </div>
        }
      </Filters>

      {
        <Search className={toggleFilterSearch ? "show" : ""}>
          <i className="fas fa-search"></i>
          <input type="search" placeholder="Search here !"></input>
        </Search>
      }

      {
        <>
          <div className={toggleFilter ? "filter-product" : "d-none"}>
            <div className="row">
              <div className="col-md-3">
                <div className="filer-title">
                  <span>Sort by</span>
                </div>
                <ul className="filter-list">
                  <li onClick={()=>{handleSortBy('Newness')}}>Newness</li>
                  <li onClick={()=>{handleSortBy('Top Buy')}}>Top buy</li>
                  <li onClick={()=>{handleSortBy('Low to High')}}>Price: Low to High</li>
                  <li onClick={()=>{handleSortBy('High to Low')}}>Price: High to Low</li>
                </ul>
              </div>
              <div className="col-md-3">
                <div className="filer-title">
                  <span>Price</span>
                </div>
                <ul className="filter-list">
                  {/* <li onClick={()=>{handleFilterPrice('')}}>All</li> */}
                  <li onClick={()=>{handleFilterPrice('0-200')}}>0 đ - 200,000 đ</li>
                  <li onClick={()=>{handleFilterPrice('200-400')}}>200,000 đ - 400,000 đ</li>
                  <li onClick={()=>{handleFilterPrice('400-600')}}>400,000 đ - 600,000 đ</li>
                  <li onClick={()=>{handleFilterPrice('Under 600')}}>600,000 đ +</li>
                </ul>
              </div>
              <div className="col-md-3">
                <div className="filer-title">
                  <span>Color</span>
                </div>
                <ul className="filter-list">
                  <li onClick={()=>{handleFilterColor('black')}}>
                    <i className="fas fa-circle" style={{ color: "black" }}></i>{" "}
                    <span>Black</span>
                  </li>
                  <li onClick={()=>{handleFilterColor('white')}}>
                    <i className="fas fa-circle" style={{ color: "white" }}></i>{" "}
                    <span>White</span>
                  </li>
                  <li onClick={()=>{handleFilterColor('blue')}}>
                    <i className="fas fa-circle" style={{ color: "blue" }}></i>{" "}
                    <span>Blue</span>
                  </li>
                  <li onClick={()=>{handleFilterColor('green')}}>
                    <i className="fas fa-circle" style={{ color: "green" }}></i>{" "}
                    <span>Green</span>
                  </li>
                  <li onClick={()=>{handleFilterColor('yellow')}}>
                    <i
                      className="fas fa-circle"
                      style={{ color: "yellow" }}
                    ></i>{" "}
                    <span>Yellow</span>
                  </li>
                  <li onClick={()=>{handleFilterColor('brown')}}>
                    <i className="fas fa-circle" style={{ color: "brown" }}></i>{" "}
                    <span>Brown</span>
                  </li>
                  <li onClick={()=>{handleFilterColor('red')}}>
                    <i className="fas fa-circle" style={{ color: "red" }}></i>{" "}
                    <span>Red</span>
                  </li>
                </ul>
              </div>
              {activeFilter != "All Products" && activeFilter && (
                <div className="col-md-3">
                  <div className="filer-title">
                    <span>Sub categories</span>
                  </div>
                  <ul className="filter-list">
                    {subCategories &&
                      subCategories.map((item) => {
                        return (
                          <li
                            onClick={() => {
                              handelFilterSubCategory(item.id);
                            }}
                          >
                            {item.name}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      }
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
