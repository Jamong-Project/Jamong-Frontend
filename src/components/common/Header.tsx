import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #282c34;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px 0px 20px;
`;

const HeaderItemWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
`;

const NavigationItem = styled.div`
  color: white;
  font-weight: bold;
  display: inline-block;
  padding: 16px;
`;

const Header = () => {
  const navigationItems: string[] = ["홈", "봉사", "자유게시판"];

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderItemWrapper>
          <Logo width={48} height={48} style={{ margin: "0px 16px 0px 0px" }} />
          {navigationItems.map((item) => (
            <NavigationItem key={item}>{item}</NavigationItem>
          ))}
        </HeaderItemWrapper>
        <Button variant="contained">Login</Button>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
