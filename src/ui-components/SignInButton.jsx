import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { loginRequest } from "../authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleLogin = (loginType) => {
    setAnchorEl(null);

   // Save the current location pathname before redirecting
   const currentPath = location.pathname;
   localStorage.setItem("postLoginRedirectUrl", currentPath);
    console.log("signin: saving postLoginRedirectUrl: ", currentPath);

    if (loginType === "popup") {
      instance.loginPopup(loginRequest);
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest);
    }
  };

  return (
    <div>
      <Button
        // onClick={(event) => setAnchorEl(event.currentTarget)}
        onClick={() => handleLogin("redirect")}
        color="inherit"
      >
        Login
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleLogin("popup")} key="loginPopup">
          Sign in using Popup
        </MenuItem>
        <MenuItem onClick={() => handleLogin("redirect")} key="loginRedirect">
          Sign in using Redirect
        </MenuItem>
      </Menu>
    </div>
  );
};
