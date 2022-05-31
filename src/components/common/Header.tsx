import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SignInUpButton from "../sign-in-up-button";

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

type NavigationType = {
  name: string;
  link: string;
};

const Header = () => {
  const navigationItems: NavigationType[] = [
    { name: "홈", link: "/" },
    { name: "봉사", link: "/list" },
    { name: "자유게시판", link: "/board" },
  ];

  const page = useLocation().pathname;

  // Show background if the page is at the top
  const [showBackground, setShowBackground] = useState<boolean>(false);

  const handleScroll = () => setShowBackground(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer className={showBackground ? "header-background" : ""}>
      <HeaderWrapper>
        <HeaderItemWrapper>
          <Logo width={42} height={42} style={{ margin: "0px 16px 0px 0px" }} />
          <ul>
            {navigationItems.map((item) => (
              <NavigationItem key={item.name}>
                <Link
                  to={`${item.link}`}
                  style={{
                    textDecoration: "none",
                    color: page === item.link ? "black" : "grey",
                  }}
                >
                  {item.name}
                </Link>
              </NavigationItem>
            ))}
          </ul>
        </HeaderItemWrapper>
        <SignInUpButton />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
