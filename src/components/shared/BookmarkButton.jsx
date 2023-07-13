import { useDispatch } from 'react-redux';
import {
  addBookmark,
  deleteBookmark,
  pushToast,
  shiftToast,
} from 'actions/actions';
import styled from 'styled-components';
import { ReactComponent as FilledStar } from 'assets/icons/filledStar.svg';
import { ReactComponent as UnfilledStar } from 'assets/icons/unfilledStar.svg';

function BookmarkButton({ id, isBookmarked, isForModal = false }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    isBookmarked ? dispatch(deleteBookmark(id)) : dispatch(addBookmark(id));

    dispatch(pushToast(isBookmarked));
    setTimeout(() => dispatch(shiftToast()), 3000);
  };

  return (
    <ButtonWrapper
      type="button"
      aria-label={isBookmarked ? '즐겨찾기 해제' : '즐겨찾기 등록'}
      onClick={handleClick}
      $isForModal={isForModal}
    >
      {isBookmarked ? <FilledStar /> : <UnfilledStar />}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  ${({ $isForModal }) => !$isForModal && 'position: absolute'};
  right: 12px;
  bottom: 66px;
  width: 24px;
  height: 24px;
`;

export default BookmarkButton;
