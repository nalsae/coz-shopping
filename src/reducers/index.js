import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import productsReducer from './productsReducer';
import toastReducer from './toastReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'cozShopping',
  storage,
  whitelist: ['productsReducer', 'toastReducer'],
};

const reducers = combineReducers({ productsReducer, toastReducer });

export default persistReducer(persistConfig, reducers);
