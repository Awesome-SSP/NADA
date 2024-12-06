import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import DVMSIcon from '../DVMS.png'; // Correct relative path
import DashboardIcon from '../Dashboard.png'; // Correct relative path
import CasesIcon from '../Cases.png'; // Correct relative path
import DataSourceIcon from '../Datasource.png'; // Correct relative path
import ABPIcon from '../Reports.png'; // Correct relative path
import InvestigatorPanelIcon from '../Investigation.png'; // Correct relative path
import OpenArrowIcon from '../openarrow.png'; // Path to open arrow icon
import CloseArrowIcon from '../closearrow.png'; // Path to close arrow icon

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box
      sx={{
        width: 200, // Fixed width for the sidebar
        padding: 2,
        backgroundColor: "#FFFFFF",
        height: "100vh", // Full height of the viewport
        position: 'fixed', // Fixed position
        top: 0,
        left: 0,
        zIndex: 1000, // Ensure it stays on top
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold", color: "#007bff" }}>
        <img src={DVMSIcon} alt="DVMS Icon" style={{ marginRight: 8, width: 32, height: 32 }} />
        DVMS
      </Typography>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          fontSize: "18px", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={DashboardIcon} alt="Dashboard Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Dashboard
      </NavLink>
      <NavLink 
        to="/cases" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          fontSize: "18px", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={CasesIcon} alt="Cases Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Cases
      </NavLink>
      <NavLink 
        to="/data-source" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          fontSize: "18px", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={DataSourceIcon} alt="Data Source Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Data Source
      </NavLink>
      <NavLink 
        to="/athlete-profile" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          fontSize: "18px", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={CasesIcon} alt="Athlete-Profile Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Athlete Profile
      </NavLink>
      <NavLink 
        to="/abp" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          fontSize: "18px", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={ABPIcon} alt="ABP Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        ABP
      </NavLink>


      {/* -----filelist section----- */}
      <NavLink 
        to="/filelist" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          fontSize: "18px", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={ABPIcon} alt="ABP Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        FileList
      </NavLink>





      <NavLink 
        to="/investigator-panel" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          fontSize: "18px", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={InvestigatorPanelIcon} alt="Investigator Panel Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Investigator Panel
      </NavLink>
      {!showMore && (
        <Box
          sx={{ 
            cursor: "pointer", 
            padding: "12px 16px", 
            color: "#007bff", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
          }}
          onClick={() => setShowMore(true)}
        >
          <img src={OpenArrowIcon} alt="Open Arrow Icon" style={{ width: 34, height: 34 }} />
        </Box>
      )}
      {showMore && (
        <>
          <NavLink 
            to="/athlete-profile2" 
            style={({ isActive }) => ({ 
              display: "block", 
              padding: "12px 16px", 
              textDecoration: "none", 
              fontSize: "18px", 
              color: isActive ? "#007bff" : "black" 
            })}
          >
            <img src={CasesIcon} alt="Athlete-Profile Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
            Athlete Profile 2
          </NavLink>
          <Box
            sx={{ 
              cursor: "pointer", 
              padding: "12px 16px", 
              color: "#007bff", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}
            onClick={() => setShowMore(false)}
          >
            <img src={CloseArrowIcon} alt="Close Arrow Icon" style={{ width: 34, height: 34 }} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;