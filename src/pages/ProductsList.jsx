import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Products,
  Filters,
  Toasts,
  ModalPortal,
  ProductModal,
} from 'components';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { FILTER_TYPE, STORAGE_KEYS } from 'utils/constants';
import { setInitialFilter } from 'utils/functions';

function ProductsList() {
  const {
    products = [],
    modalInfo = {},
    isModalOpen,
  } = useSelector((state) => state.productsReducer);
  const { toasts = [] } = useSelector((state) => state.toastsReducer);
  const [currentFilter, setCurrentFilter] = useState(
    setInitialFilter(STORAGE_KEYS.productsList)
  );

  const { observerTarget, filtered, isLoading } = useInfiniteScroll(
    products,
    currentFilter,
    false
  );

  return (
    <main>
      <h2 className="srOnly">상품 리스트 페이지</h2>
      <Filters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        filterType={FILTER_TYPE.products}
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

export default ProductsList;
