import { productsInitialState } from './initialState';
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  OPEN_MODAL,
  CLOSE_MODAL,
} from 'actions/actions';

const productsReducer = (state = productsInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: payload };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, error: payload };
    case ADD_BOOKMARK: {
      const targetIndex = state.products.findIndex(
        ({ id }) => id === payload.id
      );
      const newState = {
        ...state,
        products: state.products.map((product, index) =>
          index === targetIndex ? { ...product, isBookmarked: true } : product
        ),
      };

      return {
        ...newState,
        bookmarked: [...state.bookmarked, newState.products[targetIndex]],
      };
    }
    case DELETE_BOOKMARK: {
      const targetIndex = state.products.findIndex(
        ({ id }) => id === payload.id
      );
      const newState = {
        ...state,
        products: state.products.map((product, index) =>
          index === targetIndex ? { ...product, isBookmarked: false } : product
        ),
      };

      return {
        ...newState,
        bookmarked: state.bookmarked.filter(
          ({ id }) => id !== newState.products[targetIndex].id
        ),
      };
    }
    case OPEN_MODAL:
      return {
        ...state,
        modalInfo: state.products.find(({ id }) => id === +payload.id),
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return { ...state, modalInfo: {}, isModalOpen: false };
    default:
      return state;
  }
};

export default productsReducer;
