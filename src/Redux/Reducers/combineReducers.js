import { combineReducers } from "redux";

import {
  themeReducer,
  productDataReducer,
  SingleProductReducer,
  addToCartReducer,
} from "./reducer";

export const reducers = combineReducers({
  theme: themeReducer,
  productData: productDataReducer,
  SingleProduct: SingleProductReducer,
  addToCart: addToCartReducer,
});
