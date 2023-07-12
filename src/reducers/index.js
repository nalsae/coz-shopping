import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import productsReducer from './productsReducer';
import toastsReducer from './toastsReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'cozShopping',
  storage,
  whitelist: ['productsReducer', 'toastsReducer'],
};

const reducers = combineReducers({ productsReducer, toastsReducer });

export default persistReducer(persistConfig, reducers);
