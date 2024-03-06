import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography, Grid } from '@mui/material';
import video from '../Media/Bike.mp4';

// ... (same imports as before)

const Testride = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
    modal: '',
    state: '',
    city: '',
    dealerHub: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100%',
        }}
      >
        <Card sx={{ maxWidth: 600, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(5px)', borderRadius: '10px', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" mb={2} align="center">
              <b>Book a Test Ride</b>
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    type="email"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Preferred Model"
                    name="modal"
                    value={formData.modal}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  >
                    <MenuItem value="modal1">Model 1</MenuItem>
                    <MenuItem value="modal2">Model 2</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  >
                    <MenuItem value="city1">City 1</MenuItem>
                    <MenuItem value="city2">City 2</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  >
                    <MenuItem value="state1">State 1</MenuItem>
                    <MenuItem value="state2">State 2</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Dealer Hub"
                    name="dealerHub"
                    value={formData.dealerHub}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, height: '40px' }}
                  >
                    <MenuItem value="hub1">Dealer Hub 1</MenuItem>
                    <MenuItem value="hub2">Dealer Hub 2</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth mt={2} sx={{ height: '56px' }}>
                    Book Testride
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Testride;
