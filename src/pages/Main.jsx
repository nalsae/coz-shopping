import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Products from 'components/Products';
import Toast from 'components/Toast';
import sliceProducts from 'utils/functions/sliceProducts';

function Main() {
  const { products = [], bookmarked = [] } = useSelector(
    (state) => state.productsReducer
  );
  const { toasts = [] } = useSelector((state) => state.toastsReducer);

  const allProducts = sliceProducts(products, 'all');
  const bookmarkedProducts = sliceProducts(bookmarked, 'bookmark');

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
      <ToastsWrapper>
        {toasts.map((isBookmarked) => (
          <Toast
            key={uuid()}
            role="alert"
            aria-live="assertive"
            isBookmarked={isBookmarked}
          />
        ))}
      </ToastsWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  position: relative;
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

const ToastsWrapper = styled.div`
  position: absolute;
  right: 24px;
  bottom: 12px;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  gap: 12px;
`;

export default Main;
