import styled from 'styled-components';
import BookmarkButton from './BookmarkButton';

function Product({ productInfo }) {
  const {
    id,
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
    isBookmarked,
  } = productInfo;

  return (
    <ProductWrapper>
      <ProductImg
        width="264px"
        height="210px"
        src={type === 'Brand' ? brand_image_url : image_url}
        alt=""
      />
      {type === 'Product' && (
        <>
          <MainInfo>
            <h3>{title}</h3>
            <DiscountRate>{discountPercentage}%</DiscountRate>
          </MainInfo>
          <SubInfo type={type}>{Number(price).toLocaleString()}원</SubInfo>
        </>
      )}
      {type === 'Category' && (
        <>
          <MainInfo>
            <h3># {title}</h3>
          </MainInfo>
        </>
      )}
      {type === 'Exhibition' && (
        <>
          <MainInfo>
            <h3>{title}</h3>
          </MainInfo>
          <SubInfo type={type}>{sub_title}</SubInfo>
        </>
      )}
      {type === 'Brand' && (
        <>
          <MainInfo>
            <h3>{brand_name}</h3>
            <p>관심고객수</p>
          </MainInfo>
          <SubInfo type={type}>{follower}</SubInfo>
        </>
      )}
      <BookmarkButton id={id} isBookmarked={isBookmarked} />
    </ProductWrapper>
  );
}

const ProductWrapper = styled.li`
  position: relative;
  width: 264px;
  height: 264px;
  font-size: 16px;
`;

const ProductImg = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  object-fit: cover;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  font-weight: 800;
`;

const DiscountRate = styled.p`
  color: #452cdd;
`;

const SubInfo = styled.p`
  display: flex;
  justify-content: ${({ type }) =>
    type === 'Exhibition' ? 'flex-start' : 'flex-end'};
  align-items: center;
  height: 24px;
  font-weight: 300;
`;

export default Product;
