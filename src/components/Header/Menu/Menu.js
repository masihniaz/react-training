import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "../../Material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    textTransform: "none",
    display: "inline",
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
}));

function Menu({ menuItems, onChange }) {
  const classes = useStyles();

  const handleChange = (menuItem) => {
    onChange(menuItem);
  };

  return (
    <>
      {menuItems.map((menuItem, index) => (
        <Button
          key={index}
          className={classes.menuButton}
          color="primary"
          onClick={() => handleChange(menuItem)}
        >
          <Typography variant="body2" color="inherit">
            {menuItem.label}
          </Typography>
        </Button>
      ))}
    </>
  );
}

Menu.propTypes = {
  /**
   * Menu items
   */
  menuItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
  /**
   * onChange handler
   */
  onChange: PropTypes.func.isRequired,
};

export default Menu;
