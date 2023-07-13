const filterProducts = (products, currentFilter, isBookmarkPage) => {
  if (isBookmarkPage) {
    const bookmarked = products.filter(({ isBookmarked }) => isBookmarked);

    return currentFilter === 'All'
      ? bookmarked
      : bookmarked.filter(({ type }) => type === currentFilter);
  } else {
    return currentFilter === 'All'
      ? products
      : products.filter(({ type }) => type === currentFilter);
  }
};

export default filterProducts;
