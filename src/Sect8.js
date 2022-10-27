import React from 'react'
import rightimage from './images/homebuyers-primary.webp'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Sect8 = () => {
  return (
    <div className='bigdiv' style={{textAlign:'center',marginBottom:'70px'}}>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
      <Grid item xs={6} md={8} lg={6}>
      <div className="div1" style={{display: 'inline-block',width:"450px"}}>
            <h3 style={{color:"#25262d",fontSize:'24px',marginBottom:'10px'}}>MORTGAGES MADE SIMPLE</h3>
            <h4 style={{padding:"0 0 20px", fontSize:'33px',color:"#5462d1",marginBottom:'8px'}}>Make your mortgage fast, easy, & less expensive</h4>
            <p style={{fontSize:"18px",fontWeight:"300", lineHeight:"1.5",color:"#61657d",}} >Answer a few simple questions about you and your life, and Homebuyer will automatically fill out your forms. No stress, no digging for paperwork, no pushy salespeople.</p>
            <p style={{fontSize:'18px',fontWeight:"300",lineHeight:'1.5', color:"#61657d",padding:"0 80px 0 0"}}>Learn more about <a href="#">mortgage pre-approvals</a></p>
      </div>
      </Grid>
      <Grid item xs={3} md={2} lg={6}>
      <div className="div2">
            <img src={rightimage} alt="right image" />
      </div>
      </Grid>
    </Grid>
    </Box>
   </div>
  )
}

export default Sect8