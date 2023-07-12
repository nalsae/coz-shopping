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
  flex-flow: row wrap;
  column-gap: 24px;
  row-gap: 12px;
  width: 1128px;
  margin: 0 auto 24px;
`;

export default Products;
