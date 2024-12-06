import React from "react";
import Header from "../components/Header";
import { Box, Typography, Button, Grid, Paper, Stack } from "@mui/material";
import AssessmentIcon from '@mui/icons-material/Assessment';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FlagIcon from '@mui/icons-material/Flag';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';

const AthleteProfile = () => {
  return (
    <Box sx={{ backgroundColor: "#F0F4F8", minHeight: '100vh' }}>
      <Header title="Athlete Profile" subtitle="Access Athletes Profiles" />
      <Box sx={{ padding: 2, borderRadius: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 3 }}>
              <Stack direction="column" spacing={1} alignItems="center">
                <AssessmentIcon fontSize="large" sx={{ color: '#1E88E5', fontSize: 40 }} />
                <Typography variant="h6">Risk Assessment</Typography>
              </Stack>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>More Details</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 3 }}>
              <Stack direction="column" spacing={1} alignItems="center">
                <MedicalServicesIcon fontSize="large" sx={{ color: '#E53935', fontSize: 40 }} />
                <Typography variant="h6">Medical Report</Typography>
              </Stack>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>More Details</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 3 }}>
              <Stack direction="column" spacing={1} alignItems="center">
                <FlagIcon fontSize="large" sx={{ color: '#8E24AA', fontSize: 40 }} />
                <Typography variant="h6">ABP</Typography>
              </Stack>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>More Details</Button>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Athlete Data Management System (ADMS)</Typography>
          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, borderRadius: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <AssessmentIcon />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Allegation Details</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Type of ADRV: Athlete Doping Rule Violation</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Date: 3 Nov, 2023</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Substance: Tamoxifen</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>View Details</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, borderRadius: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FlagIcon />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Doping Control Process</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">DCF: Doping Control Form</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">SCD: Standard Control Document</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Laboratory Result: Lab Result</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>View Details</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, borderRadius: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FolderIcon />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Documentary Evidence</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Travel Documents</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Medical Records</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Prescription Records</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>View Details</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, borderRadius: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PeopleIcon />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Witness Statements</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">DCO</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Statements</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Professionals Testimony</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>View Details</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, borderRadius: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PersonIcon />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Athlete Information</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Medical History</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Training Schedules</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Whereabouts Info</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>View Details</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, borderRadius: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <DevicesIcon />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Digital Evidence</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Social Media Activity</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Phone Records</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper sx={{ padding: 2, borderRadius: 3 }}>
                      <Typography variant="body2">Financial History</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>View Details</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AthleteProfile;