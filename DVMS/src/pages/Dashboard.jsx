import React from "react";
import Header from "../components/Header"; // Import the Header component
import { Box, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, PieChart, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Pie as ChartPie } from 'react-chartjs-2';
import 'chart.js/auto';

const dataBar = [
  { name: 'Sat', Cleared: 10, Suspicious: 15 },
  { name: 'Sun', Cleared: 12, Suspicious: 18 },
  { name: 'Mon', Cleared: 8, Suspicious: 20 },
  { name: 'Tue', Cleared: 15, Suspicious: 10 },
  { name: 'Wed', Cleared: 5, Suspicious: 25 },
  { name: 'Thu', Cleared: 10, Suspicious: 15 },
  { name: 'Fri', Cleared: 9, Suspicious: 19 },
];

const dataLine = [
  { name: 'Jul', Cases: 15 },
  { name: 'Aug', Cases: 20 },
  { name: 'Sep', Cases: 18 },
  { name: 'Oct', Cases: 25 },
  { name: 'Nov', Cases: 22 },
  { name: 'Dec', Cases: 30 },
];

const pieData = {
  labels: ['False Positive', 'Suspicious Cases', 'Cases Solved', 'Ongoing Cases'],
  datasets: [
    {
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboard = () => {
  return (
    <Box display="flex" bgcolor="#f0f2f5" minHeight="100vh">
      <Box flex="1" p={2}>
        <Header title="Dashboard" subtitle="Overview of key metrics" /> {/* Add the Header here */}
        <Box display="grid" gap={2} gridTemplateColumns="repeat(12, 1fr)" mt={2}>
          {/* Updated Cases section */}
          <Box bgcolor="#3B82F6" borderRadius={2} boxShadow={1} gridColumn="span 4" p={2}>
            <Typography color="white" variant="h4">
              27
            </Typography>
            <Typography color="white">
              cases
            </Typography>
          </Box>
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 4" p={2}>
            <Typography color="textSecondary" variant="h4">
              7
            </Typography>
            <Typography>
              cases Solved
            </Typography>
          </Box>
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 4" p={2}>
            <Typography fontWeight="bold" variant="h6">
              Updates
            </Typography>
            <Box display="flex" flexDirection="column" mt={2} gap={2}>
              <Button variant="contained" href="http://example.com/investigators">
                Investigators assigned
              </Button>
              <Button variant="contained" href="http://example.com/athlete-profile">
                Athlete profile updated
              </Button>
              <Button variant="contained" href="http://example.com/case-report">
                Case report
              </Button>
            </Box>
          </Box>
          {/* Updated Bar Chart */}
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 8" p={2} display="flex" flexDirection="column" alignItems="center">
            <Typography fontWeight="bold" variant="h6" mb={2}>
              Athlete performance Report
            </Typography>
            <BarChart data={dataBar} height={350} width={600}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Cleared" fill="#FF0000" radius={[10, 10, 0, 0]} />
              <Bar dataKey="Suspicious" fill="#add8e6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </Box>
          {/* Updated Pie Chart */}
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 4" p={2} display="flex" flexDirection="column" alignItems="center">
            <Typography fontWeight="bold" variant="h6" mb={2}>
              Case management
            </Typography>
            <ChartPie data={pieData} />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">False Positive: <span style={{ color: '#FF6384' }}>10%</span></Typography>
              <Typography variant="body1">Suspicious Cases: <span style={{ color: '#36A2EB' }}>20%</span></Typography>
              <Typography variant="body1">Cases Solved: <span style={{ color: '#FFCE56' }}>30%</span></Typography>
              <Typography variant="body1">Ongoing Cases: <span style={{ color: '#4BC0C0' }}>40%</span></Typography>
            </Box>
          </Box>
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 6" p={2}>
            <Typography fontWeight="bold" variant="h6">
              New Athletes
            </Typography>
            <Box display="flex" mt={2}>
              <Box flex="1" textAlign="center">
                <Link to="/athlete-profile2">
                  <img
                    alt="Ritika Sharma"
                    className="w-20 h-20 rounded-full mx-auto"
                    height="60"
                    src="https://storage.googleapis.com/a1aa/image/EgxNNzpafNwNACvMeyjK3MDU9cnfU1mX4Q5Hw7rbfdsFmFVPB.jpg"
                    width="60"
                    style={{ borderRadius: '50%' }} // Making images circular
                  />
                  <Typography>
                    Ritika Sharma
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Runner
                  </Typography>
                </Link>
              </Box>
              <Box flex="1" textAlign="center">
                <Link to="/athlete-profile2">
                  <img
                    alt="Ajay Chauhan"
                    className="w-20 h-20 rounded-full mx-auto"
                    height="60"
                    src="https://storage.googleapis.com/a1aa/image/ZF5mZjvO6gp4Ed579iS8SURceQXqrQL23DkhxG6aApUyso6JA.jpg"
                    width="60"
                    style={{ borderRadius: '50%' }} // Making images circular
                  />
                  <Typography>
                    Ajay Chauhan
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Swimmer
                  </Typography>
                </Link>
              </Box>
              <Box flex="1" textAlign="center">
                <Link to="/athlete-profile2">
                  <img
                    alt="Rahul Kumar"
                    className="w-20 h-20 rounded-full mx-auto"
                    height="60"
                    src="https://storage.googleapis.com/a1aa/image/eEwXZvpL4kUgRamVpIY9GJ7lQki5fxNttI7VyREsRvGjZR1TA.jpg"
                    width="60"
                    style={{ borderRadius: '50%' }} // Making images circular
                  />
                  <Typography>
                    Rahul Kumar
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Cyclist
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 6" p={2}>
            <Typography fontWeight="bold" variant="h6">
              Cases Solved
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Cases" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
            </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;