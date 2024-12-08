import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

const RegisterModal = ({ handleRegisterClose, openRegister }) => {
  return (
    <Dialog open={openRegister} onClose={handleRegisterClose}>
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
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
        <Button
          onClick={handleRegisterClose}
          color="primary"
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={handleRegisterClose}
          color="primary"
          variant="contained"
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterModal;
