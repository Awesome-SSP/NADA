import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SettingsSubheader from "../components/SettingsSubheader";
import { Box } from "@mui/material";

const Settings = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Header title="Settings" subtitle="Manage your app settings" />
      <SettingsSubheader />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Settings;