import React from 'react';
import Header from '../components/Header';
import { Box, Typography, Grid, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ABP = () => {
  const haematologicalData = {
    labels: ['4.7', '4.8', '4.9', '5.0', '5.1', '5.2'],
    datasets: [
      {
        label: 'Rbc and MCV Graph',
        data: [801, 811, 821, 831, 841, 851],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
      },
    ],
  };

  const steroidalData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        label: 'Testosterone level Graph',
        data: [17, 19, 21, 18, 20, 22],
        borderColor: 'cyan',
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: 2 }}>
      
        <Header title='ABP' subtitle='Analyze behavior patterns' />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <img src='https://placehold.co/40x40' alt='Haematological Module Icon' style={{ width: '40px', height: '40px' }} />
                <Typography variant='h6' sx={{ ml: 1 }}>
                  Haematological Module
                </Typography>
              </Box>
              <Button variant='text' sx={{ color: '#3b82f6' }}>More</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <img src='https://placehold.co/40x40' alt='Steroidal Module Icon' style={{ width: '40px', height: '40px' }} />
                <Typography variant='h6' sx={{ ml: 1 }}>
                  Steroidal Module
                </Typography>
              </Box>
              <Button variant='text' sx={{ color: '#ec4899' }}>More</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <img src='https://placehold.co/40x40' alt='Endocrine Module Icon' style={{ width: '40px', height: '40px' }} />
                <Typography variant='h6' sx={{ ml: 1 }}>
                  Endocrine Module
                </Typography>
              </Box>
              <Button variant='text' sx={{ color: '#3b82f6' }}>More</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, marginBottom: '16px' }}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Haematological Graph
              </Typography>
              <Line data={haematologicalData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, marginBottom: '16px' }}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Steroidal Graph
              </Typography>
              <Line data={steroidalData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, marginTop: '16px' }}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                ABP Modules
              </Typography>
              <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: '1%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src='https://placehold.co/40x40' alt='Haematological Module Icon' style={{ width: '40px', height: '40px' }} />
                    <Typography variant='body1' sx={{ ml: 1 }}>
                      Haematological Module
                    </Typography>
                  </Box>
                  <Button variant='outlined' size='small'>More</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src='https://placehold.co/40x40' alt='Steroidal Module Icon' style={{ width: '40px', height: '40px' }} />
                    <Typography variant='body1' sx={{ ml: 1 }}>
                      Steroidal Module
                    </Typography>
                  </Box>
                  <Button variant='outlined' size='small'>More</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src='https://placehold.co/40x40' alt='Endocrine Module Icon' style={{ width: '40px', height: '40px' }} />
                    <Typography variant='body1' sx={{ ml: 1 }}>
                      Endocrine Module
                    </Typography>
                  </Box>
                  <Button variant='outlined' size='small'>More</Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                ABP Reports
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>SL No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Return</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>01.</TableCell>
                      <TableCell>Simran</TableCell>
                      <TableCell>ATH76</TableCell>
                      <TableCell sx={{ color: 'green' }}>+5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>02.</TableCell>
                      <TableCell>Umesh</TableCell>
                      <TableCell>ATH87</TableCell>
                      <TableCell sx={{ color: 'green' }}>+10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>03.</TableCell>
                      <TableCell>Rahul</TableCell>
                      <TableCell>ATH05</TableCell>
                      <TableCell sx={{ color: 'blue' }}>Read</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>04.</TableCell>
                      <TableCell>Vishnu</TableCell>
                      <TableCell>ATH54</TableCell>
                      <TableCell sx={{ color: 'blue' }}>Read</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>05.</TableCell>
                      <TableCell>Sam</TableCell>
                      <TableCell>ATH02</TableCell>
                      <TableCell sx={{ color: 'blue' }}>Read</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      
    </Box>
  );
};

export default ABP;