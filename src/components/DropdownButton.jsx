import styled from 'styled-components';
import { ReactComponent as Hamburger } from 'assets/hamburgerIcon.svg';

function DropdownButton({ setIsOpen }) {
  const handleClick = () => setIsOpen((prevValue) => !prevValue);

  return (
    <HamburgerButton>
      <Hamburger onClick={handleClick} />
    </HamburgerButton>
  );
}

const HamburgerButton = styled.button`
  cursor: pointer;
`;

export default DropdownButton;
