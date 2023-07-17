import styled from 'styled-components';

function Footer() {
  return (
    <SeperatorWrapper>
      <FooterWrapper>
        <FooterLinks>
          <p>개인 정보 처리방침</p>
          <span></span>
          <p>이용 약관</p>
        </FooterLinks>
        All rights reserved @ Codestates
      </FooterWrapper>
    </SeperatorWrapper>
  );
}

const SeperatorWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 58px;
  margin: 0 auto;
  font-size: 12px;
  color: #888888;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 18px;

  > span {
    display: block;
    width: 1px;
    height: 16px;
    background-color: #888888;
  }
`;

export default Footer;
