import styled from 'styled-components';
import Product from './Product';

function Products({ productsInfo }) {
  return (
    <ProductsWrapper>
      {productsInfo.map((productInfo) => (
        <Product key={productInfo.id} productInfo={productInfo} />
      ))}
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.ul`
  display: flex;
  gap: 24px;
  width: 1128px;
  margin: 0 auto;
`;

export default Products;
