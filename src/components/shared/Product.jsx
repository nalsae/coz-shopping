import { useDispatch } from 'react-redux';
import { openModal } from 'actions/actions';
import styled from 'styled-components';
import BookmarkButton from './BookmarkButton';
import { PRODUCT_TYPES } from 'utils/constants';

function Product({ productInfo }) {
  const dispatch = useDispatch();

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
  const { brand, product, category, exhibition } = PRODUCT_TYPES;

  const handleClick = (e) => {
    if (e.target.closest('button')) return;

    dispatch(openModal(e.target.closest('li').id));
  };

  return (
    <ProductWrapper id={id} onClick={handleClick}>
      <ProductImg
        width="264px"
        height="210px"
        src={type === brand ? brand_image_url : image_url}
        alt=""
      />
      {type === product && (
        <>
          <MainInfo>
            <h3>{title}</h3>
            <DiscountRate>{discountPercentage}%</DiscountRate>
          </MainInfo>
          <SubInfo type={type}>{Number(price).toLocaleString()}원</SubInfo>
        </>
      )}
      {type === category && (
        <>
          <MainInfo>
            <h3># {title}</h3>
          </MainInfo>
        </>
      )}
      {type === exhibition && (
        <>
          <MainInfo>
            <h3>{title}</h3>
          </MainInfo>
          <SubInfo type={type}>{sub_title}</SubInfo>
        </>
      )}
      {type === brand && (
        <>
          <MainInfo>
            <h3>{brand_name}</h3>
            <p>관심고객수</p>
          </MainInfo>
          <SubInfo type={type}>{follower}</SubInfo>
        </>
      )}
      <BookmarkButton id={id} isBookmarked={isBookmarked} isForModal={false} />
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
    type === PRODUCT_TYPES.exhibition ? 'flex-start' : 'flex-end'};
  align-items: center;
  height: 24px;
  font-weight: 300;
`;

export default Product;
