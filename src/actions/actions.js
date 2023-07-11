export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const addBookmark = (id) => ({
  type: ADD_BOOKMARK,
  payload: {
    id,
  },
});

export const deleteBookmark = (id) => ({
  type: DELETE_BOOKMARK,
  payload: {
    id,
  },
});
