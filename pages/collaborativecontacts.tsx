
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';

const institutions = [
  'National Institute of Technology, Delhi',
  'Dr. B. R. Ambedkar National Institute of Technology, Jalandhar',
  'National Institute of Technology, Srinagar',
  'Punjab Engineering College (Deemed to be University), Chandigarh',
  'National Institute of Technology, Uttarakhand'
];

const contacts = [
  {
    title: 'Honorary Director',
    name: 'Dr. Satish Kumar'
  },
  {
    title: 'Regional Coordinator',
    name: 'Prof. Brahmjit Singh',
    department: 'Electronics & Communication Engineering Department, NIT Kurukshetra-136119',
    email: 'brahmjit@nitkkr.ac.in'
  },
  {
    title: 'Co-Coordinator',
    name: 'Prof. Sathans',
    department: 'Electrical Engineering Department, NIT Kurukshetra',
    email: 'brahmjit@nitkkr.ac.in, racs@nitkkr.ac.in'
  }
];

const CollaborativeContacts = () => {
  return (
    <Box sx={{ padding:{md:'3rem',xs:'1.5rem'} , backgroundColor: '#f0f4f8' }}>
   
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '2rem', color: '#555',fontWeight:'bold' }}>
        Partner Institutions in RAC-S, NIT Kurukshetra
      </Typography>
      <Grid container spacing={3}>
        {institutions.map((institution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              background: 'linear-gradient(135deg,rgba(202, 205, 173, 0.81),rgb(199, 220, 241))',
              height: '180px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(206, 61, 61, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.05)' }
            }}>
              <CardContent>
                <Typography variant="h6" align="center" sx={{ color: '#333', fontWeight: 'bold' }}>
                  <SchoolIcon sx={{ verticalAlign: 'middle', marginRight: '8px', color: '#1976d2' }} />
                  {institution}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop:{md:'4rem',xs:'2rem'} , marginBottom: '2rem', color: '#555',fontWeight:'bold' }}>
        Contact Details
      </Typography>
      <Grid container spacing={3}>
        {contacts.map((contact, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ 
             background: 'linear-gradient(135deg,rgba(202, 205, 173, 0.81),rgb(199, 220, 241))',
              height: '180px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(206, 61, 61, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.05)' }
            }}>
              <CardContent>
                <Typography variant="h6" align="center" sx={{ color: '#333', fontWeight: 'bold' }}>
                  {contact.title}
                </Typography>
                <Typography variant="body1" align="center" sx={{ color: '#555' }}>
                  {contact.name}
                </Typography>
                {contact.department && (
                  <Typography variant="body2" color="textSecondary" align="center">
                    {contact.department}
                  </Typography>
                )}
                {contact.email && (
                  <Typography variant="body2" align="center" sx={{ marginTop: '8px', color: '#1976d2' }}>
                    <EmailIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    {contact.email}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CollaborativeContacts;