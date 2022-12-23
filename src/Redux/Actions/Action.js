import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
} from "../Constant/Constant";

export const themeAction = () => {
  return {
    type: "theme",
  };
};

export const listProductAction = (filter, limit = 4) => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    if (filter) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/productByCategory/${filter}?limit=${limit}`
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
    } else {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/product?limit=${limit}`
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
    }
  };
};

export const getProductWithIdAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/productDetail/${id}`
      );
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_FAIL, payload: error });
    }
  };
};

export const addToCart = (option) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TO_CART_REQUEST });
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/productDetail/${option.id}`
      );
      const dataCart = {
        id: option.id,
        Color: option.Color,
        size: option.Size,
        quantity: option.qnt,
        price: data.price,
        thumbnail: data.thumbnail,
        name: data.name,
        user_id: option.user_id || ""
      };
      console.log('DATA CART',dataCart);
      if (option.user_id) {
        await axios.post(
          `http://localhost:3000/api/addToCart`,{dataCart}
        ).then((res)=>{
          try {
            console.log(res);
            dispatch({
              type: ADD_TO_CART_SUCCESS,
              payload: dataCart,
            });
          } catch (error) {
            console.log(error);
          }
        })
      } else {
        const dataCartExits = JSON.parse(localStorage.getItem("carts")) || [];
        dataCartExits.push(dataCart);
        localStorage.setItem("carts", JSON.stringify(dataCartExits));
        dispatch({
          type: ADD_TO_CART_SUCCESS,
          payload: dataCart,
        });
      }
    } catch (error) {
      dispatch({ type: ADD_TO_CART_FAIL, payload: error });
    }
  };
};
