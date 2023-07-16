const HOVER_VALUE = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

const OPACITY_VALUE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const INITIAL_LOADING_VALUE = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const MODAL_VALUE = {
  initial: { opacity: 0, scale: 0.9, x: '-50%', y: '-50%' },
  animate: { opacity: 1, scale: 1.0 },
  transition: { duration: 0.2 },
};

export { HOVER_VALUE, OPACITY_VALUE, INITIAL_LOADING_VALUE, MODAL_VALUE };
