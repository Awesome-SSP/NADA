import React from "react";
import { Box, Typography } from "@mui/material";

const AppSetting = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>App Settings</Typography>
        {/* Add app settings content here */}
      </Box>
    </Box>
  );
};

export default AppSetting;