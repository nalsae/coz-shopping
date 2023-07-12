import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  addBookmark,
  deleteBookmark,
  pushToast,
  shiftToast,
} from 'actions/actions';
import { ReactComponent as FilledStar } from 'assets/filledStar.svg';
import { ReactComponent as UnfilledStar } from 'assets/unfilledStar.svg';

function BookmarkButton({ id, isBookmarked }) {
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
    >
      {isBookmarked ? <FilledStar /> : <UnfilledStar />}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  position: absolute;
  right: 12px;
  bottom: 66px;
  width: 24px;
  height: 24px;
`;

export default BookmarkButton;
