import uuid from 'react-uuid';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { OPACITY_VALUE } from 'styles/motionValues';
import filledStar from 'assets/icons/filledStar.svg';
import unfilledStar from 'assets/icons/unfilledStar.svg';
import { TOAST_CONTENTS } from 'utils/constants';

function Toasts({ toasts }) {
  return (
    <ToastsWrapper>
      <AnimatePresence>
        {toasts.map((isBookmarked) => (
          <ToastContainer
            key={uuid()}
            role="alert"
            aria-live="assertive"
            $isBookmarked={isBookmarked}
            exit={OPACITY_VALUE.exit}
          >
            <ToastContent $isBookmarked={isBookmarked}>
              {isBookmarked ? TOAST_CONTENTS.delete : TOAST_CONTENTS.add}
            </ToastContent>
          </ToastContainer>
        ))}
      </AnimatePresence>
    </ToastsWrapper>
  );
}

const ToastsWrapper = styled.div`
  position: fixed;
  right: 24px;
  bottom: 12px;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  gap: 12px;
  z-index: 999;
`;

const ToastContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $isBookmarked }) => ($isBookmarked ? '305px' : '291px')};
  height: 52px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px #00000026;
`;

const ToastContent = styled.p`
  width: ${({ $isBookmarked }) => ($isBookmarked ? '244px' : '230px')};
  margin: 0 auto;
  background: left / contain no-repeat
    ${({ $isBookmarked }) =>
      $isBookmarked ? `url(${unfilledStar})` : `url(${filledStar})`};
  font-weight: 800;
  text-align: end;
`;

export default Toasts;
