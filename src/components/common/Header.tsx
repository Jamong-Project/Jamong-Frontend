import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const HeaderContainer = styled.nav`
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  -webkit-transition: background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 16px;
`;

const HeaderItemWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationItem = styled.li`
  font-weight: bold;
  display: inline-block;
  padding: 0px 16px;
`;

const Header = () => {
  const navigationItems: string[] = ["홈", "봉사", "자유게시판"];
  const navigationLinks: string[] = ["/", "/list", "/board"];

  // Hide background if the page is at the top
  const [hideBackground, setHideBackground] = useState<boolean>(false);

  const handleScroll = () => setHideBackground(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer className={hideBackground ? "header-background" : ""}>
      <HeaderWrapper>
        <HeaderItemWrapper>
          <Logo width={48} height={48} style={{ margin: "0px 16px 0px 0px" }} />
          <ul>
            {navigationItems.map((item, index) => (
              <NavigationItem key={item}>
                <Link
                  to={`${navigationLinks[index]}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item}
                </Link>
              </NavigationItem>
            ))}
          </ul>
        </HeaderItemWrapper>
        <Button variant="contained">Login</Button>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
