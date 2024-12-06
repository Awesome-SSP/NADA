import React, { useState } from "react";
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Upload } from "@mui/icons-material";
import axios from "axios";


const ReportSection = () => {
  
const[file,setFile] = useState(null);
const[category,setCategory] = useState();
const[description,setDescription] = useState();
const [submitAnonymously, setSubmitAnonymously] = useState(false);
  const [addDetails, setAddDetails] = useState(false);

  const upload = async()=>{
    if (!file) {
      console.log("No file selected");
      return;
    }
  try{
    const formData = new FormData();
    formData.append('file',file);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('submitAnonymously', submitAnonymously);
    formData.append('addDetails', addDetails);
    const response = await axios.post("http://localhost:5001/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("File uploaded successfully:", response.data);

    // Reset form
    setCategory("");
    setDescription("");
    setFile(null);
    setSubmitAnonymously(false);
    setAddDetails(false);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

return (
  <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
    <Box
      sx={{
        padding: 2,
        backgroundColor: "white",
        borderRadius: 1,
        boxShadow: 1,
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Report Section
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h6" fontWeight="medium" color="primary" pb={1}>
          Report
        </Typography>
      </Box>
      <Typography mb={2}>
        Welcome to DVMS Whistleblower Portal. Report any concern securely and anonymously.
      </Typography>
      <Box component="form">
        <Box mb={2}>
          <Typography variant="body1" mb={1}>
            Category
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <Typography variant="body1" mb={1}>
            Description
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <Typography variant="body1" mb={1}>
            Upload files
          </Typography>
          <Button
            variant="contained"
            component="label"
            sx={{ backgroundColor: "#e0e0e0", color: "#000" }}
          >
            Choose File
            <input
              type="file"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Button>
          {file && (
            <Typography variant="body2" color="textSecondary" mt={1}>
              Selected file: {file.name}
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary" mt={1}>
            Supported file types: jpg, png, pdf
          </Typography>
        </Box>
        <Box mb={2} display="flex" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                checked={submitAnonymously}
                onChange={(e) => setSubmitAnonymously(e.target.checked)}
              />
            }
            label="Submit Anonymously"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={addDetails}
                onChange={(e) => setAddDetails(e.target.checked)}
              />
            }
            label="Add details"
          />
        </Box>
        <Button variant="contained" color="primary" onClick={upload} fullWidth>
          Submit Report
        </Button>
      </Box>
    </Box>
  </Box>
);
};

export default ReportSection;