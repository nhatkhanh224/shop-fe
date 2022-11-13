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
  REMOVE_FROM_CART,
} from "../Constant/Constant";

const initTheme = { theme: false };
export const themeReducer = (state = initTheme, action) => {
  if (action.type === "theme") {
    return (initTheme.theme = !initTheme.theme);
  }
  return initTheme.theme;
};

const initProduct = { data: [], loading: true };
export const productDataReducer = (state = initProduct, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };

    case PRODUCT_LIST_SUCCESS:
      return { ...state, data: [...action.payload], loading: false };

    case PRODUCT_LIST_FAIL:
      return { ...state, data: [...action.payload], loading: false };

    default:
      return state;
  }
};

const initSIngleProduct = { product: {}, loading: true };
export const SingleProductReducer = (state = initSIngleProduct, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case SINGLE_PRODUCT_SUCCESS:
      return { ...state, product: { ...action.payload }, loading: false };
    case SINGLE_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const initAddToCart = { items: [], loading: false };
export const addToCartReducer = (state = initAddToCart, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return { ...state, loading: true };
    case ADD_TO_CART_SUCCESS:
      const check = state.items.find((el) => el.id === action.payload.id);
      if (check) {
        return {
          ...state,
          loading: false,
          items: state.items.map((e) =>
            e.id !== action.payload.id ? e : action.payload
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          loading: false,
        };
      }

    case ADD_TO_CART_FAIL:
      return { ...state, loading: false, error: action.payload };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
};
