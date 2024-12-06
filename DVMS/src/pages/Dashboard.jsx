import React from "react";
import Header from "../components/Header"; // Import the Header component
import { Box, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const dataBar = [
  { name: 'Sat', Cleared: 10, Suspicious: 15 },
  { name: 'Sun', Cleared: 12, Suspicious: 18 },
  { name: 'Mon', Cleared: 8, Suspicious: 20 },
  { name: 'Tue', Cleared: 15, Suspicious: 10 },
  { name: 'Wed', Cleared: 5, Suspicious: 25 },
  { name: 'Thu', Cleared: 10, Suspicious: 15 },
  { name: 'Fri', Cleared: 9, Suspicious: 19 },
];

const dataPie = [
  { name: 'New', value: 30 },
  { name: 'Under Investigation', value: 15 },
  { name: 'Solved', value: 35 },
  { name: 'Investment', value: 20 },
];

const dataLine = [
  { name: 'Jul', Cases: 15 },
  { name: 'Aug', Cases: 20 },
  { name: 'Sep', Cases: 18 },
  { name: 'Oct', Cases: 25 },
  { name: 'Nov', Cases: 22 },
  { name: 'Dec', Cases: 30 },
];

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
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 4" p={2}>
            <Typography color="primary" variant="h4">
              27
            </Typography>
            <Typography>
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
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography>
                    Investigators assigned
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    28 January 2021
                  </Typography>
                </Box>
                <Typography color="error">
                  +50
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography>
                    Athlete profile updated
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    25 January 2021
                  </Typography>
                </Box>
                <Typography color="success">
                  +100
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography>
                    Case report
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    21 January 2021
                  </Typography>
                </Box>
                <Typography color="primary">
                  +5
                </Typography>
              </Box>
            </Box>
          </Box>
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
              <Bar dataKey="Cleared" fill="#FF0000" />
              <Bar dataKey="Suspicious" fill="#add8e6" />
            </BarChart>
          </Box>
          <Box bgcolor="white" borderRadius={2} boxShadow={1} gridColumn="span 4" p={2} display="flex" flexDirection="column" alignItems="center">
            <Typography fontWeight="bold" variant="h6" mb={2}>
              Case management
            </Typography>
            <PieChart height={400} width={400}>
              <Pie
                cx={200}
                cy={200}
                data={dataPie}
                dataKey="value"
                fill="#8884d8"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120} // Increase the outer radius
                innerRadius={50} // Increase the inner radius
                paddingAngle={5}
              >
                {dataPie.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{ transition: 'transform 0.3s', transformOrigin: 'center' }}
                    className="pie-chart-cell"
                  />
                ))}
              </Pie>
            </PieChart>
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
                    className="w-10 h-10 rounded-full mx-auto"
                    height="40"
                    src="https://storage.googleapis.com/a1aa/image/EgxNNzpafNwNACvMeyjK3MDU9cnfU1mX4Q5Hw7rbfdsFmFVPB.jpg"
                    width="40"
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
                    className="w-10 h-10 rounded-full mx-auto"
                    height="40"
                    src="https://storage.googleapis.com/a1aa/image/ZF5mZjvO6gp4Ed579iS8SURceQXqrQL23DkhxG6aApUyso6JA.jpg"
                    width="40"
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
                    className="w-10 h-10 rounded-full mx-auto"
                    height="40"
                    src="https://storage.googleapis.com/a1aa/image/eEwXZvpL4kUgRamVpIY9GJ7lQki5fxNttI7VyREsRvGjZR1TA.jpg"
                    width="40"
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