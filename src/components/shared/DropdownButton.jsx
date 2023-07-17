import styled from 'styled-components';
import { ReactComponent as Hamburger } from 'assets/icons/hamburger.svg';
import { ARIA_LABELS } from 'utils/constants';

function DropdownButton({ isOpen, setIsOpen }) {
  const handleClick = () => setIsOpen((prevValue) => !prevValue);

  const { hamburgerButton } = ARIA_LABELS;

  return (
    <HamburgerButton
      type="button"
      aria-label={isOpen ? hamburgerButton.close : hamburgerButton.open}
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
