import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoImg } from 'assets/imgs/logo.svg';

function Logo() {
  return (
    <Link to="/">
      <LogoWrapper>
        <LogoImg />
        <LogoText>COZ Shopping</LogoText>
      </LogoWrapper>
    </Link>
  );
}

const LogoWrapper = styled.h1`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 30px;
`;

const LogoText = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

export default Logo;
