import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  userLoggedInContext,
  isSignUpClickedContext,
} from "../ContextProvider.tsx";
const Navbar = () => {
  const isSignUpClicked = React.useContext(isSignUpClickedContext);

  const handleLogin = () => {
    console.log(isSignUpClicked, "inside handle login");
    return !isSignUpClicked;
  };

  const isUserLoggedIn = React.useContext(userLoggedInContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Support Earthquake Victims
          </Typography>
          {isUserLoggedIn ? (
            <Button>Log out</Button>
          ) : (
            <Button color="inherit">Login</Button>
          )}
          <Button color="inherit" onClick={handleLogin}>
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
