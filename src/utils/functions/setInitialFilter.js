const setInitialFilter = (key) => {
  const newFilter = localStorage.getItem(key);

  return newFilter ? newFilter : 'All';
};

export default setInitialFilter;
