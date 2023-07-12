import { useState } from 'react';
import { useSelector } from 'react-redux';
import Products from 'components/Products';
import Filters from 'components/Filters';
import setInitialFilter from 'utils/functions/setInitialFilter';
import filterProducts from 'utils/functions/filterProducts';

function ProductsList() {
  const { products } = useSelector((state) => state.productsReducer);
  const [currentFilter, setCurrentFilter] = useState(
    setInitialFilter('productsFilter')
  );

  const filtered = filterProducts(products, currentFilter, false);

  return (
    <main>
      <h2 className="srOnly">상품 리스트 페이지</h2>
      <Filters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        filterType="products"
      />
      <Products productsInfo={filtered} />
    </main>
  );
}

export default ProductsList;
