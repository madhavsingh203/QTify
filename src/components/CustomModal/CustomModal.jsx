import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  TextareaAutosize,
} from "@mui/material";
import {  useSnackbar } from "notistack";

const CustomModal = ({ open, handleClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleSubmit = () => {
    // Check if any of the fields are empty
    if (!fullName || !email || !subject || !description) {
      // alert("Please fill in all fields");
      enqueueSnackbar('Please fill all the required fields', {variant: "error", })
      return;
    }

    handleClose();
    enqueueSnackbar("Thanks! Yor input has been recorded.",{variant:"success"})
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="flex items-center justify-between">
        <div>Feedback</div>
        <div className="cursor-pointer" onClick={handleClose}>
          X
        </div>
      </DialogTitle>
      <DialogContent className="flex flex-col gap-3 w-96">
        <Input
          fullWidth
          required
          placeholder="Full Name*"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          required
          type="email"
          placeholder="Email ID*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          placeholder="Subject*"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextareaAutosize
          style={{
            border: "black",
            padding: "10px",
          }}
          required
          minRows={3}
          placeholder="Description*"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <Button variant="contained" onClick={handleSubmit}>
        Submit Feedback
      </Button>
    </Dialog>
  );
};

export default CustomModal;
