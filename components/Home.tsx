import React from 'react'
import {Box, Button} from '@mui/material' 

const Home = () => {
  return (
    <>
      <Box sx={{width: "80%", margin:"auto", borderRadius:3,
        border:"0px solid skyblue",padding:"50px", display:"flex", flexDirection:"column",
        flexWrap:"wrap",alignItems:"left",marginTop:"30px", }}>
        <h1>Welcome to RAC-S</h1>
        <p style={{marginTop:"10px",fontSize:"1.2rem",fontFamily:"serif"}}>Having recognized the imperative need to pursue advanced research in the areas of 
          relevance to the future technological and programmatic needs of the Indian Space Programme, 
          a Regional Academic Centre for Space (RAC-S) has been established at the Institute as a 
          joint collaborative initiative of Indian Space Research Organization (ISRO) and NIT Kurukshetra. 
          </p>

        <p style={{marginTop:"20px",fontSize:"1.2rem",fontFamily:"serif"}}>
        The Centre aims to act as a facilitator for the promotion of Space Technology related activities 
        in the northern region of the country and to become an ambassador for the capacity building, 
        awareness creation and R & D activities of ISRO.
        </p>

        <Button variant="contained" href="#contained-buttons" sx={{width:"fit-content",marginTop:"30px",
          fontFamily:"serif", fontSize:"14px",padding:"10px", bgcolor:"rgb(96, 163, 179)" ,'&:hover':{bgcolor:"rgb(84, 134, 147)"}}}>Research Areas in Space </Button>
      </Box>
    </>
  )
}

export default Home