import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import useLoginStore from "../../../stores/login-store";
import HeaderUserMenu from "./header-user-menu";
import SignInUpButton from "./sign-in-up-button";
import {
  HeaderContainer,
  HeaderItemWrapper,
  HeaderWrapper,
  NavigationItem,
} from "./styles";

export type NavigationType = {
  name: string;
  link: string;
};

const Header = () => {
  const navigationItems: NavigationType[] = [
    { name: "홈", link: "/" },
    { name: "봉사", link: "/volunteer" },
    { name: "자유게시판", link: "/board" },
  ];

  const page = useLocation().pathname;

  // Show background if the page is at the top
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const { isLoggedIn } = useLoginStore();

  const handleScroll = () => setShowBackground(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer showBackground={showBackground}>
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
        {isLoggedIn ? <HeaderUserMenu /> : <SignInUpButton />}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
