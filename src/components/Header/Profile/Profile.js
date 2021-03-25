import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from "../../Material";
import {
  AccountCircle,
  PersonIcon,
  BookmarkIcon,
  ExitToAppIcon,
} from "../../Material/Icons";
// import { useAuth } from "../../../contexts/authContext";
import { useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();
  // const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const [error, setError] = useState("");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    // try {
    //   await logout();
    //   history.push("/login");
    // } catch (ex) {
    //   // setError("Failed to log out");
    // }
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        style={{ marginLeft: 20, padding: 0 }}
      >
        <AccountCircle />
      </IconButton>

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
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            history.push("/profile");
          }}
        >
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <ListItemIcon>
            <BookmarkIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Saved Posts
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          {" "}
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
