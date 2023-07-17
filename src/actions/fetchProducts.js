import axios from 'axios';
import { fetchProductsSuccess, fetchProductsError } from './actions';
import { STORAGE_KEYS } from 'utils/constants';

export const fetchProducts = () => async (dispatch) => {
  try {
    const storageData = localStorage.getItem(STORAGE_KEYS.cozShopping);

    if (storageData) {
      dispatch(fetchProductsSuccess(storageData));
      return;
    }

    const response = await axios.get(
      'http://cozshopping.codestates-seb.link/api/v1/products'
    );

    const addedBookmark = response.data.map((product) => ({
      ...product,
      isBookmarked: false,
    }));
    dispatch(fetchProductsSuccess(addedBookmark));
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
};
