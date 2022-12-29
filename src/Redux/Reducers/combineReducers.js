import { combineReducers } from "redux";

import {
  themeReducer,
  productDataReducer,
  SingleProductReducer,
  addToCartReducer,
  productRecommendDataReducer
} from "./reducer";

export const reducers = combineReducers({
  theme: themeReducer,
  productData: productDataReducer,
  productDataReducer: productRecommendDataReducer,
  SingleProduct: SingleProductReducer,
  addToCart: addToCartReducer,
});
