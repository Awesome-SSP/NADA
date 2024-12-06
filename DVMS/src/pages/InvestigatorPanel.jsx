import React from "react";
import Header from "../components/Header"; // Import the Header component
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
} from "@mui/material";
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const pieData = {
  labels: ['False Positive', 'Suspicious Cases', 'Cases Solved', 'Ongoing Cases'],
  datasets: [
    {
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

const InvestigatorPanel = () => {
  return (
    <Box display="flex" bgcolor="#F3F4F6" minHeight="100vh">
      <Box flexGrow={1} p={3}>
        <Header title="Investigator Panel" subtitle="Access investigator tools" />
        <Grid container spacing={3}>
          {/* 1st Row: Cases Solved, In Progress, Profile */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2, height: '100%', backgroundColor: '#3B82F6', color: 'white', borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Cases Solved</Typography>
              <Typography variant="h4">23</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2, height: '100%', backgroundColor: '#8B5CF6', color: 'white', borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>In Progress</Typography>
              <Typography variant="h4">05</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2, height: '100%', borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Profile</Typography>
              <Typography>ID: #IN09</Typography>
              <Typography>Investigator Name: Manu Kumar</Typography>
              <Typography>Last Login: 12/3/22</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>More</Button>
            </Paper>
          </Grid>
          {/* 2nd Row: Case Statistics, Case List */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, height: '100%', borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Case Statistics</Typography>
              <Pie data={pieData} />
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1">False Positive: <span style={{ color: '#FF6384' }}>10%</span></Typography>
                <Typography variant="body1">Suspicious Cases: <span style={{ color: '#36A2EB' }}>20%</span></Typography>
                <Typography variant="body1">Cases Solved: <span style={{ color: '#FFCE56' }}>30%</span></Typography>
                <Typography variant="body1">Ongoing Cases: <span style={{ color: '#4BC0C0' }}>40%</span></Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, height: '100%', borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Case List</Typography>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, backgroundColor: '#E0F2FE', mb: 2, borderRadius: '10px' }}>
                      <Typography>Sports: Cyclist</Typography>
                      <Typography>DRA: 85%</Typography>
                      <Typography>Case ID: CID#500</Typography>
                      <Typography>Athlete Name: William</Typography>
                      <Button variant="contained" sx={{ mt: 1 }}>View Details</Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, backgroundColor: '#FCE7F3', mb: 2, borderRadius: '10px' }}>
                      <Typography>Sports: Runner</Typography>
                      <Typography>DRA: 75%</Typography>
                      <Typography>Case ID: CID#430</Typography>
                      <Typography>Athlete Name: Michel</Typography>
                      <Button variant="contained" sx={{ mt: 1 }}>View Details</Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: 2, backgroundColor: '#FEF3C7', borderRadius: '10px' }}>
                      <Typography>Sports: Weight Lifter</Typography>
                      <Typography>DRA: 20%</Typography>
                      <Typography>Case ID: CID#760</Typography>
                      <Typography>Athlete Name: Edward</Typography>
                      <Button variant="contained" sx={{ mt: 1 }}>View Details</Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          {/* 3rd Row: Create Investigation Report, Case Collaboration */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, height: '100%', borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Create Investigation Report</Typography>
              <TextField label="Case ID" fullWidth margin="normal" />
              <TextField label="Name of Athlete" fullWidth margin="normal" />
              <TextField label="DRA" fullWidth margin="normal" />
              <FormControl fullWidth margin="normal">
                <InputLabel>Select Report Type</InputLabel>
                <Select>
                  <MenuItem value="ABP">ABP</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" sx={{ mt: 2 }}>Add Details</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, height: '100%', borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Case Collaboration</Typography>
              <Box sx={{ mt: 2 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ mr: 2 }} src="https://placehold.co/40x40" />
                  <Box>
                    <Typography>Karan Singh</Typography>
                    <Typography>Case ID: CID#74</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ mr: 2 }} src="https://placehold.co/40x40" />
                  <Box>
                    <Typography>Rahul Jain</Typography>
                    <Typography>Case ID: CID#14</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ mr: 2 }} src="https://placehold.co/40x40" />
                  <Box>
                    <Typography>Aditya Singh</Typography>
                    <Typography>Case ID: CID#43</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ mr: 2 }} src="https://placehold.co/40x40" />
                  <Box>
                    <Typography>Vikram Rao</Typography>
                    <Typography>Case ID: CID#10</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ mr: 2 }} src="https://placehold.co/40x40" />
                  <Box>
                    <Typography>Saurabh Mishra</Typography>
                    <Typography>Case ID: CID#20</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InvestigatorPanel;