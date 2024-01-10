import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Modal,
  TextareaAutosize,
} from "@mui/material";
import React from "react";

const CustomModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="flex items-center justify-between">
        <div>Feedback</div>
        <div className="cursor-pointer" onClick={handleClose}>
          X
        </div>
      </DialogTitle>
      <DialogContent className="flex flex-col gap-3 w-96">
        <Input fullWidth required placeholder="Full Name" className="" />
        <Input required type="email" placeholder="Email ID" className="" />
        <Input required placeholder="Subject" className="" />
        <TextareaAutosize
          style={{
            border: "black",
            padding: "10px",
          }}
          required
          minRows={3}
          placeholder="Description"
        />
      </DialogContent>
      <Button variant="contained">Submit Feedback</Button>
    </Dialog>
  );
};

export default CustomModal;
