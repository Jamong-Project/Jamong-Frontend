import styled from "@emotion/styled";
import { ReactComponent as TextLogo } from "../../assets/text-logo.svg";

const FooterContainer = styled.div`
  display: flex;
  padding: 40px 16px;
  background-color: rgb(39, 38, 44);
  color: white;
  z-index: 10;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div>List</div>
        <TextLogo height={32} width={208} fill="white" />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
