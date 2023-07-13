import { useState } from 'react';
import { useSelector } from 'react-redux';
import Products from 'components/Products';
import Filters from 'components/Filters';
import Toasts from 'components/Toasts';
import ModalPortal from 'components/ModalPortal';
import ProductModal from 'components/ProductModal';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import setInitialFilter from 'utils/functions/setInitialFilter';

function Bookmark() {
  const {
    products = [],
    modalInfo = {},
    isModalOpen,
  } = useSelector((state) => state.productsReducer);
  const { toasts = [] } = useSelector((state) => state.toastsReducer);
  const [currentFilter, setCurrentFilter] = useState(
    setInitialFilter('bookmarkFilter')
  );

  const { observerTarget, filtered, isLoading } = useInfiniteScroll(
    products,
    currentFilter,
    true
  );

  return (
    <main>
      <h2 className="srOnly">북마크 페이지</h2>
      <Filters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        filterType="bookmark"
      />
      <Products productsInfo={filtered} />
      {isLoading ? (
        '로딩 중...'
      ) : (
        <div ref={observerTarget} style={{ height: '24px' }}></div>
      )}
      <Toasts toasts={toasts} />
      {isModalOpen && (
        <ModalPortal>
          <ProductModal modalInfo={modalInfo} />
        </ModalPortal>
      )}
    </main>
  );
}

export default Bookmark;
