import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Connect = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleShare = () => {
    if (isMobile && navigator.share) {
      navigator.share({
        title: 'ISRO - Academia Connect',
        text: 'Join the ISRO - Academia Connect for northern region at NIT Kurukshetra on 8th April 2025. Register now!',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScgk-z8j7styjkJbt9LRv-beSxpk6KSJ2_ThEFWakPODEn6iw/viewform',
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText('https://docs.google.com/forms/d/e/1FAIpQLScgk-z8j7styjkJbt9LRv-beSxpk6KSJ2_ThEFWakPODEn6iw/viewform');
      setTooltipOpen(true);
      setTimeout(() => setTooltipOpen(false), 2000);
    }
  };

  return (
    <Box sx={{ padding: { md: '3rem', xs: '1.5rem' }, backgroundColor: '#f0f4f8', borderRadius: '1rem', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ISRO - Academia Connect for Northern Region
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Join us at NIT Kurukshetra on <strong>8th April 2025</strong> for an insightful event connecting academia with ISRO, exploring innovative collaborations and future opportunities.
      </Typography>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Button variant="contained" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScgk-z8j7styjkJbt9LRv-beSxpk6KSJ2_ThEFWakPODEn6iw/viewform" target="_blank" rel="noopener noreferrer" sx={{width:"fit-content",
          fontFamily:"serif", fontSize:"14px",padding:"10px", bgcolor:"rgb(96, 163, 179)" ,'&:hover':{bgcolor:"rgb(84, 134, 147)"}}}>
        Register Now
      </Button>
      {/* <Typography variant="body2" color="text.secondary" gutterBottom>
        Preview of the registration form:
      </Typography>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScgk-z8j7styjkJbt9LRv-beSxpk6KSJ2_ThEFWakPODEn6iw/viewform" style={{ width: '100%', height: '400px', border: 'none', borderRadius: '0.5rem' }} title="Google Form Preview"></iframe> */}
      {isMobile ? (
        <IconButton color="primary" onClick={handleShare} >
          <ShareIcon />
        </IconButton>
      ) : (
        <Tooltip title="Link copied!" open={tooltipOpen} disableHoverListener>
          <IconButton color="primary" onClick={handleShare} >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      )}
      </Box>
    </Box>
  );
};

export default Connect;
