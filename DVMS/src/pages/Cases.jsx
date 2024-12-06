// Example for Cases.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Cases = () => {
  const [showMore, setShowMore] = useState(false);

  const data = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Cases Solved',
        data: [2, 3, 5, 6, 8, 10],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      },
    ],
  };

  const recentCases = [
    { description: 'Doping Violation', caseId: '#12548796', athleteName: 'Jatin Mehra', status: 'In Progress', date: '28 Jan, 12:30 AM' },
    { description: 'Doping Violation', caseId: '#12548796', athleteName: 'Aryan Nara', status: 'Open', date: '25 Jan, 10:40 PM' },
    { description: 'Suspicious', caseId: '#12548796', athleteName: 'Shivam Sharma', status: 'Closed', date: '20 Jan, 10:40 PM' },
    { description: 'Suspicious', caseId: '#12548796', athleteName: 'Ritika', status: 'In Progress', date: '18 Jan, 03:29 PM' },
    { description: 'Doping Violation', caseId: '#12548796', athleteName: 'Manus', status: 'Open', date: '14 Jan, 10:40 PM' },
    { description: 'Doping Violation', caseId: '#12548797', athleteName: 'Sneha Kumar', status: 'In Progress', date: '12 Jan, 11:00 AM' },
    { description: 'Suspicious Activity', caseId: '#12548798', athleteName: 'Amit Singh', status: 'Closed', date: '10 Jan, 02:50 PM' },
    { description: 'Doping Violation', caseId: '#12548799', athleteName: 'Rahul Patel', status: 'Open', date: '08 Jan, 09:15 AM' },
    { description: 'Suspicious Activity', caseId: '#12548800', athleteName: 'Neha Gupta', status: 'In Progress', date: '06 Jan, 04:45 PM' },
    { description: 'Doping Violation', caseId: '#12548801', athleteName: 'Vikram Malhotra', status: 'Closed', date: '04 Jan, 07:30 PM' },
    { description: 'Doping Violation', caseId: '#12548802', athleteName: 'Deepak Singh', status: 'Open', date: '02 Jan, 06:20 AM' },
  ];

  const displayCases = showMore ? recentCases : recentCases.slice(0, 5);

  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Header title="Cases" subtitle="Manage your cases" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 4, boxShadow: 1 }}>
            <Typography variant="h6" fontWeight="bold">In last 24 hour</Typography>
            <Typography variant="h4" color="primary">27 cases</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 4, boxShadow: 1 }}>
            <Typography variant="h6" fontWeight="bold">Cases solved</Typography>
            <Typography variant="h4" color="primary">7 cases solved</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 4, boxShadow: 1 }}>
            <Typography variant="h6" fontWeight="bold">Case Solved</Typography>
            <Bar data={data} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 4, boxShadow: 1 }}>
            <Typography variant="h6" fontWeight="bold">Recent Cases</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#007BFF" }}>Description</TableCell>
                    <TableCell sx={{ color: "#007BFF" }}>Case ID</TableCell>
                    <TableCell sx={{ color: "#007BFF" }}>Athlete Name</TableCell>
                    <TableCell sx={{ color: "#007BFF" }}>Case Status</TableCell>
                    <TableCell sx={{ color: "#007BFF" }}>Date</TableCell>
                    <TableCell sx={{ color: "#007BFF" }}>Reports</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayCases.map((caseItem, index) => (
                    <TableRow key={index}>
                      <TableCell>{caseItem.description}</TableCell>
                      <TableCell>{caseItem.caseId}</TableCell>
                      <TableCell>{caseItem.athleteName}</TableCell>
                      <TableCell>{caseItem.status}</TableCell>
                      <TableCell>{caseItem.date}</TableCell>
                      <TableCell>
                        <Button variant="contained">Download</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ textAlign: 'right', marginTop: 2 }}>
              <Button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cases;