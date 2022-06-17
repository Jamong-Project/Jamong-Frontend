import styled from "@emotion/styled";

export const HeaderContainer = styled.nav`
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

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 16px;
`;

export const HeaderItemWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationItem = styled.li`
  display: inline-block;
  padding: 0px 16px;
`;
