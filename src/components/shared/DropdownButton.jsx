import styled from 'styled-components';
import { ReactComponent as Hamburger } from 'assets/icons/hamburger.svg';

function DropdownButton({ isOpen, setIsOpen }) {
  const handleClick = () => setIsOpen((prevValue) => !prevValue);

  return (
    <HamburgerButton
      type="button"
      aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
      onClick={handleClick}
    >
      <Hamburger />
    </HamburgerButton>
  );
}

const HamburgerButton = styled.button`
  cursor: pointer;
`;

export default DropdownButton;
