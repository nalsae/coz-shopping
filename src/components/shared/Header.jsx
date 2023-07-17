import { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import DropdownButton from './DropdownButton';
import Dropdown from './Dropdown';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ShadowWrapper>
      <HeaderWrapper>
        <Logo />
        <DropdownButton isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <Dropdown />}
      </HeaderWrapper>
    </ShadowWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1128px;
  height: 80px;
  margin: 0 auto;
`;

const ShadowWrapper = styled.div`
  box-shadow: 0px 8px 8px 0px #0000001a;
`;

export default Header;
