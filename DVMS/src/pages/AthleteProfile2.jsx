import React from "react";
import Header from "../components/Header";
import { Box, Typography, TextField, Grid, Button, Avatar } from "@mui/material";

const AthleteProfile2 = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Header title="Athlete Profile" subtitle="Manage your athlete's profile" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>Athlete Profile</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar
                  alt="Profile of the athlete"
                  src="https://pnggallery.com/wp-content/uploads/chotta-bheem-01.png"
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Athlete ID"
                      value="AID#45"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Athlete Name"
                      value="Chota Bheem"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="State"
                      value="Indraprastha"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email"
                      value="bheem@gmail.com"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Date of Birth"
                      value="25 January 1150"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Present Address"
                      value="India"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Permanent Address"
                      value="Dholakpur"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="City"
                      value="Golu"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Debut Date"
                      value="23 Aug, 2250"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Pin Code"
                      value="131028"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button variant="contained" color="primary">More</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AthleteProfile2;