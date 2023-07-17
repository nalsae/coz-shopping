import all from 'assets/imgs/all.png';
import products from 'assets/imgs/products.png';
import category from 'assets/imgs/category.png';
import exhibition from 'assets/imgs/exhibition.png';
import brand from 'assets/imgs/brand.png';

const FILTER_INFO = Object.freeze([
  { type: 'All', name: '전체', imgUrl: all },
  { type: 'Product', name: '상품', imgUrl: products },
  { type: 'Category', name: '카테고리', imgUrl: category },
  { type: 'Exhibition', name: '기획전', imgUrl: exhibition },
  { type: 'Brand', name: '브랜드', imgUrl: brand },
]);

export default FILTER_INFO;
