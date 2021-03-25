import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Button,
} from "../../components/Material";
import { MenuIcon } from "../../components/Material/Icons";
import { DrawerMenu, Profile, Menu as HeaderMenu } from "../../components";
import { makeStyles } from "@material-ui/core/styles";
import menuItems from "../../constants/menuItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  menuIconButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down(600)]: {
      display: "block",
    },
  },
  loginButton: {
    marginLeft: 20,
    fontWeight: "bold",
    textTransform: "none",
  },
}));

function Header() {
  const classes = useStyles();

  const handleMenuChange = () => {};

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="secondary">
        <Toolbar variant="dense">
          <Grid container alignItems="center" justify="space-between">
            <Grid>
              <IconButton
                edge="start"
                className={classes.menuIconButton}
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  // setShowDrawer(true)
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid>
              <HeaderMenu menuItems={menuItems} onChange={handleMenuChange} />

              <Button
                className={classes.loginButton}
                variant="contained"
                size="small"
                color="primary"
                onClick={() => {
                  // history.push("/login")
                }}
              >
                Login
              </Button>

              <Profile />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <DrawerMenu
    menuItems={menuItems}
    show={showDrawer}
    onChange={setShowDrawer}
  /> */}
    </div>
  );
}

export default Header;
