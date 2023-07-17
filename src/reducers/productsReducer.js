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
      const target = state.products.find(({ id }) => id === payload.id);
      const newState = {
        ...state,
        products: state.products.map((product) =>
          product.id === target.id
            ? { ...product, isBookmarked: true }
            : product
        ),
      };
      const modalInfo =
        state.isModalOpen && state.modalInfo.id === target.id
          ? { ...state.modalInfo, isBookmarked: true }
          : state.modalInfo;

      return {
        ...newState,
        bookmarked: [...state.bookmarked, { ...target, isBookmarked: true }],
        modalInfo,
      };
    }
    case DELETE_BOOKMARK: {
      const target = state.products.find(({ id }) => id === payload.id);
      const newState = {
        ...state,
        products: state.products.map((product) =>
          product.id === target.id
            ? { ...product, isBookmarked: false }
            : product
        ),
      };
      const modalInfo =
        state.isModalOpen && state.modalInfo.id === target.id
          ? { ...state.modalInfo, isBookmarked: false }
          : state.modalInfo;

      return {
        ...newState,
        bookmarked: state.bookmarked.filter(({ id }) => id !== target.id),
        modalInfo,
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
