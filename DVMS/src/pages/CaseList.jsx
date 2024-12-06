import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";

const CaseList = () => {
  return (
    <Box>
      <Header title="Case List" subtitle="Access Various Cases" />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        Case List content goes here.
      </Box>
    </Box>
  );
};

export default CaseList;