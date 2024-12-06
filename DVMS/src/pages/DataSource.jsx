import React from "react";
import Header from "../components/Header";
import { Box, Button, Typography, Grid, Paper, List, ListItem, ListItemText, IconButton, Table, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";
import { Bar } from 'react-chartjs-2';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ReportIcon from '@mui/icons-material/Report';
import TestIcon from '@mui/icons-material/Biotech';
import InformerIcon from '@mui/icons-material/SupervisorAccount';

const DataSource = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Informers',
        backgroundColor: 'orange',
        data: [12, 19, 3, 5, 2, 3, 7],
      },
      {
        label: 'Cases',
        backgroundColor: 'blue',
        data: [2, 3, 20, 5, 1, 4, 10],
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Header title="Data Source" subtitle="View and manage data sources" />
      <Box sx={{ padding: 2, borderRadius: 2, boxShadow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2, gap: '1%' }}>
              <Button variant="contained" color="primary" sx={{ flex: '1 0 21%', margin: 1, borderRadius: 2, height: '100px' }} startIcon={<AnalyticsIcon />}>
                ABP
              </Button>
              <Button variant="contained" color="primary" sx={{ flex: '1 0 21%', margin: 1, borderRadius: 2, height: '100px' }} startIcon={<ReportIcon />}>
                Reports
              </Button>
              <Button variant="contained" color="primary" sx={{ flex: '1 0 21%', margin: 1, borderRadius: 2, height: '100px' }} startIcon={<TestIcon />}>
                Tests
              </Button>
              <Button variant="contained" color="primary" sx={{ flex: '1 0 21%', margin: 1, borderRadius: 2, height: '100px' }} startIcon={<InformerIcon />}>
                Informer
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ padding: 2, marginBottom: 2, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>Physical Performance Report</Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell><IconButton><PersonIcon /></IconButton></TableCell>
                      <TableCell>Shivam Sharma</TableCell>
                      <TableCell>25 Jan 2021</TableCell>
                      <TableCell><Button variant="outlined" startIcon={<DownloadIcon />}>Download</Button></TableCell>
                      <TableCell>#ATH32</TableCell>
                      <TableCell sx={{ color: 'orange' }}>Pending</TableCell>
                      <TableCell>1 hour ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><IconButton><PersonIcon /></IconButton></TableCell>
                      <TableCell>Jatin Mehra</TableCell>
                      <TableCell>25 Jan 2021</TableCell>
                      <TableCell><Button variant="outlined" startIcon={<DownloadIcon />}>Download</Button></TableCell>
                      <TableCell>#ATH44</TableCell>
                      <TableCell sx={{ color: 'green' }}>Completed</TableCell>
                      <TableCell>40 min ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><IconButton><PersonIcon /></IconButton></TableCell>
                      <TableCell>Ritika Singh</TableCell>
                      <TableCell>25 Jan 2021</TableCell>
                      <TableCell><Button variant="outlined" startIcon={<DownloadIcon />}>Download</Button></TableCell>
                      <TableCell>#ATH65</TableCell>
                      <TableCell sx={{ color: 'green' }}>Completed</TableCell>
                      <TableCell>5 min ago</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Paper sx={{ padding: 2, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>Cases & Informer Overview</Typography>
              <Bar data={data} />
              <Typography sx={{ marginTop: 2 }}>
                <Box component="span" sx={{ backgroundColor: 'orange', padding: '2px 6px', color: 'white', marginRight: 1 }}>Informers</Box>
                <Box component="span" sx={{ backgroundColor: 'blue', padding: '2px 6px', color: 'white' }}>Cases</Box>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2, marginBottom: 2, backgroundColor: '#0d47a1', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
                Whistleblower
                <Button size="small" variant="text" sx={{ color: 'white', textDecoration: 'underline' }}>
                  See All
                </Button>
              </Typography>
              <Typography variant="h3" sx={{ color: 'white' }}>05</Typography>
              <Typography sx={{ color: 'white' }}>New whistleblower</Typography>
            </Paper>
            <Paper sx={{ padding: 2, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>Recent Whistleblowers</Typography>
              <List>
                <ListItem>
                  <IconButton>
                    <PersonIcon />
                  </IconButton>
                  <ListItemText primary="John Doe" secondary="2 hours ago" />
                  <IconButton edge="end">
                    <MoreVertIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <IconButton>
                    <PersonIcon />
                  </IconButton>
                  <ListItemText primary="Jane Smith" secondary="3 hours ago" />
                  <IconButton edge="end">
                    <MoreVertIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <IconButton>
                    <PersonIcon />
                  </IconButton>
                  <ListItemText primary="Alex Johnson" secondary="5 hours ago" />
                  <IconButton edge="end">
                    <MoreVertIcon />
                  </IconButton>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DataSource;