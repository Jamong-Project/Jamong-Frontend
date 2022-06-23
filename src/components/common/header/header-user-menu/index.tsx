import { Avatar, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { ACCESS_TOKEN_STORAGE_KEY } from "../../../../constants/string";
import useLoginStore from "../../../../stores/login-store";

const HeaderUserMenu = () => {
  const [userMenu, setUserMenu] = useState<HTMLElement | null>(null);
  const { user, setIsLoggedIn, setUser } = useLoginStore();

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenu(event.currentTarget);
  };

  const logoutEvent = () => {
    if (localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)) {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    }

    setIsLoggedIn(false);
    setUser(undefined);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="User"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <Avatar src={user?.profileImage} />
      </IconButton>
      <Menu
        anchorEl={userMenu}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(userMenu)}
        onClose={() => setUserMenu(null)}
        disableScrollLock
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05))",
            width: "200px",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
      >
        <MenuItem>
          <Avatar src={user?.profileImage} /> {user?.name}
        </MenuItem>
        <Divider />
        <MenuItem>내 계정 설정</MenuItem>
        <MenuItem onClick={logoutEvent}>로그아웃</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderUserMenu;
