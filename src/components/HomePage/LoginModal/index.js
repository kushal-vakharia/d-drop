import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

const LoginModal = ({ handleLoginClose, openLogin }) => {
  return (
    <Dialog open={openLogin} onClose={handleLoginClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLoginClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleLoginClose} color="primary" variant="contained">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
