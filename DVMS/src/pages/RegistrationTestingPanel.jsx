import React, { useState } from "react";
import { Box, Typography, TextField, Button, LinearProgress, Snackbar, Alert } from "@mui/material";

const RegistrationTestingPanel = () => {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    phoneNo: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    phoneNo: false,
    email: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneNo") {
      setErrors({ ...errors, phoneNo: value !== "" && !/^\d+$/.test(value) });
    }
    if (name === "email") {
      setErrors({ ...errors, email: value !== "" && !/^\S+@\S+\.\S+$/.test(value) });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUploading(true);
    // Simulate a file upload process
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1, maxWidth: 600, margin: "auto" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>Please provide your contact details. After this information is validated, it will be used to send a temporary code as an alternate login method.</Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="User Name"
            name="userName"
            variant="outlined"
            value={formData.userName}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Phone No"
            name="phoneNo"
            variant="outlined"
            value={formData.phoneNo}
            onChange={handleChange}
            error={errors.phoneNo}
            helperText={errors.phoneNo ? "Please enter a valid phone number." : ""}
            sx={{ marginBottom: 2 }}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Please enter a valid email address." : ""}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="success" fullWidth type="submit" disabled={uploading || errors.phoneNo || errors.email}>
            Submit
          </Button>
          {uploading && <LinearProgress sx={{ marginTop: 2 }} />}
        </Box>
      </Box>
      <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Data uploaded successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegistrationTestingPanel;