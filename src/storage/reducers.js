import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_PRODUCTS_REQUEST,
  FETCH_CATEGORY_PRODUCTS_SUCCESS,
  FETCH_CATEGORY_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SEND_SALE_REQUEST,
  SEND_SALE_SUCCESS,
  SEND_SALE_FAILURE,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
  UPDATE_CART_ITEM,
  CLEAR_CART,
} from "./actions";
import { combineReducers } from "redux";

const initialCategoriesState = {
  loading: false,
  categories: [],
  error: "",
};

const initialCategoryProductsState = {
  loading: false,
  products: [],
  error: "",
};

const initialProductsState = {
  loading: false,
  products: [],
  error: "",
};

const initialProductState = {
  loading: false,
  product: {},
  error: "",
};

const initialSaleState = {
  loading: false,
  saleResponse: {},
  error: "",
};

const initialOrderState = {
  loading: false,
  orderResponse: {},
  error: "",
};

const initialCartState = {
  items: [],
};

const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const categoryProductsReducer = (
  state = initialCategoryProductsState,
  action
) => {
  switch (action.type) {
    case FETCH_CATEGORY_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CATEGORY_PRODUCTS_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case FETCH_CATEGORY_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const saleReducer = (state = initialSaleState, action) => {
  switch (action.type) {
    case SEND_SALE_REQUEST:
      return { ...state, loading: true };
    case SEND_SALE_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case SEND_SALE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case SEND_ORDER_REQUEST:
      return { ...state, loading: true };
    case SEND_ORDER_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case SEND_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return {
        ...state,
        items: updatedItems,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  categoryProducts: categoryProductsReducer,
  products: productsReducer,
  product: productReducer,
  sale: saleReducer,
  order: orderReducer,
  cart: cartReducer,
});

export default rootReducer;
