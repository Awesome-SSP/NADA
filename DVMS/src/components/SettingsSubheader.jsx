import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const SettingsSubheader = () => {
  return (
    <Box display="flex" justifyContent="space-between" mb={2} bgcolor="#fff" p={1} boxShadow={1} borderRadius={1}>
      <Button component={Link} to="/settings/registration-testing-panel" variant="contained" color="primary" sx={{ flex: 1, margin: 1 }}>
        Registration Testing Pool
      </Button>
      <Button component={Link} to="/settings/report-section" variant="contained" color="primary" sx={{ flex: 1, margin: 1 }}>
        Report Testing
      </Button>
      <Button component={Link} to="/settings/app-settings" variant="contained" color="primary" sx={{ flex: 1, margin: 1 }}>
        App Settings
      </Button>
    </Box>
  );
};

export default SettingsSubheader;