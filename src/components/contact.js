// Contact.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <div style={{ padding: '50px', background: 'linear-gradient(135deg, #6DD5FA, #2980B9)', color: '#fff' }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
        Contact Me
      </Typography>
      
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '40px' }}>
        Have any questions? Feel free to reach out. I'll get back to you as soon as possible!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              padding: '30px',
              background: '#fff',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2980B9', marginBottom: '20px' }}>
              Get In Touch
            </Typography>

            {/* Contact Icons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Phone style={{ color: '#2980B9', marginRight: '10px' }} />
                <Typography variant="body1" style={{ color: '#2980B9', marginRight: '10px' }}>+123 456 7890</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Email style={{ color: '#2980B9', marginRight: '10px' }} />
                <Typography style={{ color: '#2980B9', marginRight: '10px' }} variant="body1">contact@mywebsite.com</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn style={{ color: '#2980B9', marginRight: '10px' }} />
                <Typography style={{ color: '#2980B9', marginRight: '10px' }}variant="body1">123, My Street, City, Country</Typography>
              </div>
            </Box>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '30px' }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                sx={{ marginBottom: '15px' }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                sx={{ marginBottom: '15px' }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                sx={{ marginBottom: '25px' }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{
                  padding: '12px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#2980B9',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
