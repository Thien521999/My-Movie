// libs
import React, { useContext } from "react";
import { Fab, PropTypes } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../../../Contexts/ThemeContext";

const useStyles = makeStyles((theme) => ({
  floatBtn: {
    position: "fixed",
    right: "3rem",
    bottom: "3rem",
  },
}));

const ToggleThemeBtn = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);
  //   Cách 2
  const handleClickToggleTheme = (theme: PropTypes.Color) => {
    toggleTheme(theme === "primary" ? "secondary" : "primary");
  };

  return (
    <Fab
      color="primary"
      variant="extended"
      className={classes.floatBtn}
      //   onClick={toggleTheme.bind(
      //     this,
      //     theme === "primary" ? "secondary" : "primary"
      //   )}
      onClick={() => handleClickToggleTheme(theme)}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleThemeBtn;
