import styled from 'styled-components';
import filledStar from 'assets/filledStar.svg';
import unfilledStar from 'assets/unfilledStar.svg';

function Toast({ isBookmarked }) {
  return (
    <ToastWrapper isBookmarked={isBookmarked}>
      <ToastContent isBookmarked={isBookmarked}>
        {isBookmarked
          ? '상품이 북마크에서 제거되었습니다.'
          : '상품이 북마크에 추가되었습니다.'}
      </ToastContent>
    </ToastWrapper>
  );
}

const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isBookmarked }) => (isBookmarked ? '305px' : '291px')};
  height: 52px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px #00000026;
`;

const ToastContent = styled.p`
  width: ${({ isBookmarked }) => (isBookmarked ? '244px' : '230px')};
  margin: 0 auto;
  background: left / contain no-repeat
    ${({ isBookmarked }) =>
      isBookmarked ? `url(${unfilledStar})` : `url(${filledStar})`};
  font-weight: 800;
  text-align: end;
`;

export default Toast;
