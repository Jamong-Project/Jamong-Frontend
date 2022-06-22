import { AccountCircle } from "@mui/icons-material";
import { Avatar, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import useLoginStore from "../../../../stores/login-store";

const HeaderUserMenu = () => {
  const [userMenu, setUserMenu] = useState<HTMLElement | null>(null);
  const { user } = useLoginStore();

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenu(event.currentTarget);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="User"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <AccountCircle />
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
          <Avatar /> {user?.name}
        </MenuItem>
        <Divider />
        <MenuItem>내 계정 설정</MenuItem>
        <MenuItem>로그아웃</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderUserMenu;
