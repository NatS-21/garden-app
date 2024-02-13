import API_BASE_URL from "../apiConfig";

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const FETCH_CATEGORY_PRODUCTS_REQUEST =
  "FETCH_CATEGORY_PRODUCTS_REQUEST";
export const FETCH_CATEGORY_PRODUCTS_SUCCESS =
  "FETCH_CATEGORY_PRODUCTS_SUCCESS";
export const FETCH_CATEGORY_PRODUCTS_FAILURE =
  "FETCH_CATEGORY_PRODUCTS_FAILURE";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

export const SEND_SALE_REQUEST = "SEND_SALE_REQUEST";
export const SEND_SALE_SUCCESS = "SEND_SALE_SUCCESS";
export const SEND_SALE_FAILURE = "SEND_SALE_FAILURE";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILURE = "SEND_ORDER_FAILURE";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

export const fetchCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  fetch(`${API_BASE_URL}/categories/all`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error })
    );
};

export const fetchCategoryProducts = (categoryId) => (dispatch) => {
  dispatch({ type: FETCH_CATEGORY_PRODUCTS_REQUEST });
  fetch(`${API_BASE_URL}/categories/${categoryId}`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: data })
    )
    .catch((error) =>
      dispatch({ type: FETCH_CATEGORY_PRODUCTS_FAILURE, payload: error })
    );
};

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  fetch(`${API_BASE_URL}/products/all`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error })
    );
};

export const fetchProduct = (productId) => (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });
  fetch(`${API_BASE_URL}/products/${productId}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error })
    );
};

export const sendSale = (saleData) => (dispatch) => {
  dispatch({ type: SEND_SALE_REQUEST });
  fetch(`${API_BASE_URL}/sale/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(saleData),
  })
    .then((response) => response.json())
    .then((data) => dispatch({ type: SEND_SALE_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: SEND_SALE_FAILURE, payload: error }));
};

export const sendOrder = (orderData) => (dispatch) => {
  dispatch({ type: SEND_ORDER_REQUEST });
  fetch(`${API_BASE_URL}/order/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then((response) => response.json())
    .then((data) => dispatch({ type: SEND_ORDER_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: SEND_ORDER_FAILURE, payload: error }));
};

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const updateCartItem = (itemId, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: { itemId, quantity },
});
