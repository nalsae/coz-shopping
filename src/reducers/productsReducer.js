import { initialState } from './initialState';
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
} from 'actions/actions';

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: payload, bookmarked: [] };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, error: payload };
    case ADD_BOOKMARK: {
      const targetIndex = state.products.findIndex(
        ({ id }) => id === payload.id
      );
      const { products } = { ...state };
      products[targetIndex].isBookmarked = !products[targetIndex].isBookmarked;

      return {
        ...state,
        products,
        bookmarked: [...state.bookmarked, products[targetIndex]],
      };
    }
    case DELETE_BOOKMARK: {
      const targetIndex = state.bookmarked.findIndex(
        ({ id }) => id === payload.id
      );

      return {
        ...state,
        bookmarked: state.bookmarked.filter(
          (_, index) => index !== targetIndex
        ),
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
