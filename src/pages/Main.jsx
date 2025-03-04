import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Products, Toasts, ModalPortal, ProductModal } from 'components';
import sliceProducts from 'utils/functions/sliceProducts';

function Main() {
  const {
    products = [],
    bookmarked = [],
    modalInfo = {},
    isModalOpen,
  } = useSelector((state) => state.productsReducer);
  const { toasts = [] } = useSelector((state) => state.toastsReducer);

  const allProducts = useMemo(() => sliceProducts(products, 'all'), [products]);
  const bookmarkedProducts = useMemo(
    () => sliceProducts(bookmarked, 'bookmark'),
    [bookmarked]
  );

  return (
    <MainWrapper>
      <section>
        <ListTitle>상품 리스트</ListTitle>
        <Products productsInfo={allProducts} />
      </section>
      <section>
        <ListTitle>북마크 리스트</ListTitle>
        {bookmarkedProducts.length ? (
          <Products productsInfo={bookmarkedProducts} />
        ) : (
          <NonExistMsg>즐겨찾기에 등록한 상품이 존재하지 않습니다.</NonExistMsg>
        )}
      </section>
      <Toasts toasts={toasts} />
      {isModalOpen && (
        <ModalPortal>
          <ProductModal modalInfo={modalInfo} />
        </ModalPortal>
      )}
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 12px;
  margin: 12px 0 24px;
`;

const ListTitle = styled.h2`
  width: 1128px;
  margin: 12px auto;
  font-size: 24px;
  font-weight: 700;
`;

const NonExistMsg = styled.p`
  width: 1128px;
  height: 24px;
  margin: 12px auto 0;
`;

export default Main;
