const MAX_COUNT = 96;

const createRandomIndex = () => {
  return Math.floor(Math.random() * MAX_COUNT);
};

const sliceProducts = (products, type = 'all') => {
  const randomIndex = createRandomIndex();
  const productsCount = products.length;

  return type === 'bookmark'
    ? products.slice(productsCount < 4 ? 0 : productsCount - 4, productsCount)
    : products.slice(randomIndex, randomIndex + 4);
};

export default sliceProducts;
