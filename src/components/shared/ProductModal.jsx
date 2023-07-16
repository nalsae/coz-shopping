import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'actions/actions';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MODAL_VALUE } from 'styles/motionValues';
import BookmarkButton from './BookmarkButton';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';
import { PRODUCT_TYPES } from 'utils/constants';

function ProductModal({ modalInfo }) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'unset');
  }, []);

  const {
    id,
    type,
    title,
    brand_name,
    image_url,
    brand_image_url,
    isBookmarked,
  } = modalInfo;
  const imgUrl = image_url || brand_image_url;
  const { brand, product, category, exhibition } = PRODUCT_TYPES;

  const handleClick = () => dispatch(closeModal());

  return (
    <>
      <Background onClick={handleClick} />
      <ModalWrapper
        $imgUrl={imgUrl}
        initial={MODAL_VALUE.initial}
        animate={MODAL_VALUE.animate}
        transition={MODAL_VALUE.transition}
      >
        <InfoWrapper $isBookmarked={isBookmarked}>
          <BookmarkButton
            id={id}
            isBookmarked={isBookmarked}
            isForModal={true}
          />
          <p>
            {type === category && `# ${title}`}
            {type === brand && brand_name}
            {(type === product || type === exhibition) && title}
          </p>
        </InfoWrapper>
        <CloseButton type="button" aria-label="닫기" onClick={handleClick}>
          <CloseIcon />
        </CloseButton>
      </ModalWrapper>
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 2;
`;

const ModalWrapper = styled(motion.aside)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 744px;
  height: 480px;
  background: center / cover no-repeat ${({ $imgUrl }) => `url(${$imgUrl})`};
  border-radius: 12px;
  box-shadow: 0px 0px 36px 0px #00000080;
  z-index: 3;
`;

const InfoWrapper = styled.div`
  position: absolute;
  left: 24px;
  bottom: 27px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 8px;
  height: 24px;
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
`;

export default ProductModal;
