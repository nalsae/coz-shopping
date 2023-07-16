import styled from 'styled-components';
import { motion } from 'framer-motion';
import { INITIAL_LOADING_VALUE } from 'styles/motionValues';
import Product from './Product';

function Products({ productsInfo }) {
  return (
    <ProductsWrapper
      initial={INITIAL_LOADING_VALUE.initial}
      animate={INITIAL_LOADING_VALUE.animate}
      transition={INITIAL_LOADING_VALUE.transition}
    >
      {productsInfo.map((productInfo) => (
        <Product key={productInfo.id} productInfo={productInfo} />
      ))}
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled(motion.ul)`
  display: flex;
  flex-flow: row wrap;
  column-gap: 24px;
  row-gap: 12px;
  width: 1128px;
  margin: 0 auto 24px;
`;

export default Products;
