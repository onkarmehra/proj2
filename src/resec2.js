import React from 'react'
import pic1 from './images/image.png'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

const Resec2 = () => {
  return (
       <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={4}>
         <Grid item xs={3} md={5} lg={6}>
           <div className="con" style={{textAlign:'center', marginTop:'160px'}} >
           <h1 className="rs1text1">
        Better mortgages for first-time buyers.
        </h1>
        <p style={{fontSize:'20px'}}>
        No commissions. No paperwork. No stress.
        </p>
           </div>
           
         </Grid>
         <Grid item xs={3} md={6} lg={6}>
          <img className='house' src={pic1} alt="pic1" style={{height:'900px',width:'700px', marginLeft:"-40px",marginTop:'-207px'}}/>
         </Grid>
       </Grid>
     </Box>
  )
}

export default Resec2