import { useEffect } from 'react';
import styled from 'styled-components';
import { SELECTED_FILTER_STYLE } from 'styles/mixin';
import { FILTER_INFO, FILTER_TYPE, STORAGE_KEYS } from 'utils/constants';

function Filters({ currentFilter, setCurrentFilter, filterType }) {
  const handleClick = (e) => setCurrentFilter(e.target.closest('li').id);

  useEffect(() => {
    filterType === FILTER_TYPE.products
      ? localStorage.setItem(STORAGE_KEYS.productsList, currentFilter)
      : localStorage.setItem(STORAGE_KEYS.bookmark, currentFilter);
  }, [currentFilter]);

  return (
    <FiltersWrapper>
      {FILTER_INFO.map(({ type, name, imgUrl }) => (
        <Filter id={type} key={type} onClick={handleClick}>
          <img src={imgUrl} alt="" />
          <FilterName type={type} $currentFilter={currentFilter}>
            {name}
          </FilterName>
        </Filter>
      ))}
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 36px;
  min-width: 1128px;
  height: 122px;
  margin: 24px auto 12px;
`;

const Filter = styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const FilterName = styled.p`
  height: 24px;
  line-height: 24px;
  ${({ type, $currentFilter }) =>
    type === $currentFilter && SELECTED_FILTER_STYLE}
`;

export default Filters;
