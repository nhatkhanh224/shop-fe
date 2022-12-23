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

export function Prodacts(props) {
  const dispatch = useDispatch();
  const [toggleFilter, setToggleFilter] = useState(false); //to Show serch box
  const { loading, data } = useSelector((state) => state.productData); //get card product data
  const [activeFilter, setActiveFilter] = useState("All Products"); //btn filter
  const [limit, setLimit] = useState(4);
  const [type, setType] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  //func search box

  useEffect(() => {
    dispatch(listProductAction());
    getCategories();
  }, [dispatch]);

  useEffect(()=>{
    if (activeFilter && activeFilter !== "All Products") {
      getSubCategories();
    }
  },[activeFilter])

  //function btn filter
  const handelFilter = (e) => {
    const category = e.target.dataset.category;
    setType(category);
    setActiveFilter(category);
    dispatch(listProductAction(category, limit));
  };
  const handelFilterSubCategory = (e) => {
    const category = e.target.value;
    setType(category);
    dispatch(listProductAction(category, limit));
  };

  const handleLimitation = () => {
    const add = limit + 4;
    setLimit(add);
    dispatch(listProductAction(type, add));
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
  }

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
            className={activeFilter === "All Products" || activeFilter === "" ? "active" : ""}
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
              onClick={() => setToggleFilter(!toggleFilter)}
              className={!toggleFilter ? "fas fa-search" : " fas fa-times"}
            >
              Search
            </button>
          </div>
        }
      </Filters>

      {
        <Search className={toggleFilter ? "show" : ""}>
          <i className="fas fa-search"></i>
          <input type="search" placeholder="Search here !"></input>
        </Search>
      }
    </>
  );

  return (
    <>
      <Products>
        <div className="container">
          <h2>PRODUCT OVERVIEW</h2>
          {Filter()}
          {activeFilter!="All Products" && <div className="d-flex">
            <div className="m-l-2">
              <Form.Select aria-label="Default select example" onChange={(e)=>{handelFilterSubCategory(e)}}>
                <option disabled>Sub categories</option>
                {subCategories && subCategories.map((item)=>{
                  return <option value={item.id}>{item.name}</option>
                })}
              </Form.Select>
            </div>
            <div className="ml-2">
              <Form.Select aria-label="Default select example">
                <option>Color</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="ml-2">
              <Form.Select aria-label="Default select example">
                <option>Sort</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>}
          {displayProduct()}
        </div>
      </Products>
    </>
  );
}
