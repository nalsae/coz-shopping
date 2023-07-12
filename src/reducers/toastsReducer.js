import { toastsInitialState } from './initialState';
import { PUSH_TOAST, SHIFT_TOAST } from 'actions/actions';

const toastsReducer = (state = toastsInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUSH_TOAST:
      return { ...state, toasts: [...state.toasts, payload] };
    case SHIFT_TOAST:
      return { ...state, toasts: state.toasts.slice(1) };
    default:
      return state;
  }
};

export default toastsReducer;
