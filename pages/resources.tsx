import { Typography, Box, Button } from '@mui/material';
import DownloadIcon from "@mui/icons-material/Download";
import  React from 'react'

const Resources = ()=>{
    return (
        <>
            <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '0rem', color: '#555',
                fontWeight:'bold', marginTop:"2.5rem" }}>
            Call for Research Proposal        
            </Typography>

            <Box sx={{width: {md:"80%",xs:"90%"}, margin:"auto", borderRadius:3,
            border:"0px solid skyblue",padding:"50px", display:"flex", flexDirection:"column",
            flexWrap:"wrap",alignItems:"left",marginTop:"0px", }}>
                
                <p style={{marginTop:"0px",fontSize:"1.2rem",fontFamily:"serif"}}>Research proposals are 
                    hereby invited from the faculty of NIT Kurukshetra and the Partner Institutions. 
                    The Principal Investigator (PI) may upload the research Proposals in the prescribed formats.
                </p>

                <Button variant="contained" href="#contained-buttons" startIcon={<DownloadIcon/>} sx={{width:"fit-content",marginTop:"30px",
          fontFamily:"serif", fontSize:"14px",padding:"10px", bgcolor:"rgb(96, 163, 179)" ,'&:hover':{bgcolor:"rgb(84, 134, 147)"}}}>
            Click here to download the formats </Button>

            </Box>
        </>
    );
}


export default Resources;