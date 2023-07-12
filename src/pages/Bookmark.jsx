import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Products from 'components/Products';
import Filters from 'components/Filters';
import setInitialFilter from 'utils/functions/setInitialFilter';
import filterProducts from 'utils/functions/filterProducts';

function Bookmark() {
  const { products } = useSelector((state) => state.productsReducer);
  const [currentFilter, setCurrentFilter] = useState(
    setInitialFilter('bookmarkFilter')
  );

  const filtered = filterProducts(products, currentFilter, true);

  return (
    <main>
      <h2 className="srOnly">북마크 페이지</h2>
      <Filters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        filterType="bookmark"
      />
      <Products productsInfo={filtered} />
    </main>
  );
}

export default Bookmark;
