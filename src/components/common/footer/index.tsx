import { ReactComponent as TextLogo } from "../../../assets/text-logo.svg";
import { FooterContainer, FooterWrapper } from "./styles";

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
