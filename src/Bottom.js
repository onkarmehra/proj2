import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Bottom = () => {
  return (
    <div style={{marginTop:'5px'}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid xs={12} md={3} lg={2}>
          <div className='pp' >
            <a   style={{textDecoration:'none'}} href="#">Privacy Policy</a>
          </div>
        </Grid>
        <Grid xs={12} md={3} lg={1}>
          <div className='tos'>
            <a style={{textDecoration:'none'}} href="#">Terms of Service</a>
          </div>
        </Grid>
        <Grid className='mnotice'xs={12} md={3} lg={2}>
          <div className='mnotice1'>
            <a style={{textDecoration:'none'}} href="#" >Important Mortgage Notice</a>
          </div>
        </Grid>
        <Grid xs={12} md={3} lg={6}>
          <div>
            <p style={{fontSize:'14px',fontColor:'#9da3ab', textAlign:'center'}}>© 2022 All rights reserved. Growella Inc d/b/a Homebuyer.</p>
          </div>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Bottom