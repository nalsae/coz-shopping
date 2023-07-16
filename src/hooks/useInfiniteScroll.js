import { useState, useEffect, useRef, useCallback } from 'react';
import { filterProducts } from 'utils/functions';

function useInfiniteScroll(products, currentFilter, isBookmarkPage) {
  const [filtered, setFiltered] = useState(
    filterProducts(products, currentFilter, isBookmarkPage)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(Math.ceil(filtered.length / 12));
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef(null);

  const renderNextPage = useCallback(() => {
    setIsLoading(true);

    if (currentPage < totalPage) {
      const filtered = filterProducts(products, currentFilter, isBookmarkPage);
      setFiltered(filtered.slice(0, 12 * (currentPage + 1)));
      setCurrentPage((prevValue) => prevValue + 1);
    }

    setIsLoading(false);
  }, [currentPage]);

  useEffect(() => {
    const newFiltered = filterProducts(products, currentFilter, isBookmarkPage);

    setFiltered(newFiltered.slice(0, filtered.length));
  }, [products]);

  useEffect(() => {
    setFiltered(filtered.slice(0, 12));
    setCurrentPage(1);
    setTotalPage(Math.ceil(filtered.length / 12));
  }, [currentFilter]);

  useEffect(() => {
    if (observerTarget.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) renderNextPage();
        },
        { threshold: 1 }
      );
      observer.observe(observerTarget.current);

      return () => observer.disconnect();
    }
  }, [renderNextPage]);

  return { observerTarget, filtered, isLoading };
}

export default useInfiniteScroll;
