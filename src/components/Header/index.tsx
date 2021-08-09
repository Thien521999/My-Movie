// libs
import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Box,
  FormControl,
  Toolbar,
  Typography,
  MenuItem,
  Button,
  Select,
  Chip,
} from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
// components
import WelcomeMessage from "./mains/WelcomeMessage";
import Login from "./mains/Login";
// others
import "./style.scss";
import { ProgressContext } from "../../Contexts/ProgressContext";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { AuthContext } from "../../Contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "16px 0 16px 0",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [position, setPosition] = useState<string>("Full-stack Developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  const { lastTime, status } = useContext(ProgressContext);

  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);

  const onPositionChange = (
    event: ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);

  return (
    <div className="header-wrapper">
      <AppBar position="static" color={theme}>
        <Toolbar>
          <Box className={classes.title}>
            <Typography variant="h6">My Movies</Typography>
            <Box textAlign="center">
              <WelcomeMessage position={position} />
              <Chip
                label={`Last time working on this project: ${lastTime} - Status: ${status}`}
              />
              <Box mt={1}>
                <FormControl>
                  <Select value={position} onChange={onPositionChange}>
                    <MenuItem value="Full-stack Developer">
                      Full-stack Developer
                    </MenuItem>
                    <MenuItem value="Front-end Developer">
                      Front-end Developer
                    </MenuItem>
                    <MenuItem value="Beck-end Developer">
                      Beck-end Developer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box textAlign="center">
              <Box my={1}>
                <Typography variant="h6">{time.toUTCString()}</Typography>
              </Box>
              <Button
                variant="contained"
                onClick={
                  isAuthenticated
                    ? () => toggleAuth("")
                    : () => setIsOpen(!isOpen)
                }
              >
                {isAuthenticated ? "Logout" : "Login"}
              </Button>
              <Login isOpen={isOpen} setIsOpen={setIsOpen} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
