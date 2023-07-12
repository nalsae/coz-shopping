const setInitialFilter = (filterType) => {
  const newFilter = localStorage.getItem(filterType);

  return newFilter ? newFilter : 'All';
};

export default setInitialFilter;
