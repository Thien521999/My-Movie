// libs
import React, {
  useState,
  ChangeEvent,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
// context
import { AuthContext } from "../../../../Contexts/AuthContext";

interface LoginProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  const [username, setUsername] = useState("");

  const { toggleAuth } = useContext(AuthContext);

  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onLoginSubmit = () => {
    toggleAuth(username);
    setUsername("");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="login-wrapper">
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogContent>
          <TextField onChange={handleChangeUserName} value={username} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onLoginSubmit}
            color="primary"
            variant="contained"
            disabled={username === ""}
          >
            Click to Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
