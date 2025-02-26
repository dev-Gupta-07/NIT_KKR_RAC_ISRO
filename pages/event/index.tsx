import React from 'react'
import { Box,Button, Typography } from '@mui/material'
import router from 'next/router'
const Event = () => {
    const handleClick=()=>{
      router.push('/event/connect');
    }
  return (
    <>
    <Box sx={{ padding:{md:'4rem',xs:'1.5rem'} , backgroundColor: '#f0f4f8',borderRadius: '1rem', textAlign: 'center' }}>
     <Typography variant="h6" color="text.secondary" paragraph>
     {`The RAC ISRO Connect at NIT Kurukshetra is a groundbreaking event aimed at fostering collaboration between academia and ISRO. This initiative opens doors for students, researchers, and faculty to engage with space technology, innovative projects, and real-world applications. It’s an exceptional opportunity to gain insights into ISRO's cutting-edge advancements, ongoing missions, and future research prospects. Attendees will explore how academic institutions can contribute to India's space programs through joint research, technology development, and skill enhancement. The event will feature keynote sessions by ISRO scientists, interactive workshops, and project discussions. Whether you're a student eager to dive into space science or a researcher seeking collaboration, this event is tailored for you. It’s not just about knowledge-sharing—it’s about building partnerships for the future of space exploration. Join us on 8th April 2025 and be a part of this incredible journey. Let’s connect, innovate, and launch ideas into the future.`}
     </Typography>
    <Button variant="contained" onClick={handleClick}  sx={{width:"fit-content",marginTop:"30px",
          fontFamily:"serif", fontSize:"14px",padding:"10px", bgcolor:"rgb(96, 163, 179)" ,'&:hover':{bgcolor:"rgb(84, 134, 147)"}}}>Click to Connect </Button>
    </Box>
    </>
  )
}

export default Event