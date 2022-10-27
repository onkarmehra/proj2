import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import pic1 from './images/homebuyer-logo.webp'
import pic2 from './images/fdic.webp'
import pic3 from './images/equal-housing-lender-1.webp'
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }} style={{marginRight:'125px',marginLeft:'125px'}}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={3}>
          <div className="f1 fc">
            <ul className="f1ul">
                <li><img src={pic1} alt="pic" style={{height:'auto',maxWidth:'100%'}} /></li>
                 <li><p>Homebuyer is powered by Novus Home Mortgage, a division of Ixonia Bank, NMLS #423065. Member FDIC. Equal Housing Lender</p></li>
                 <li><div className="pics2">
                    <img src={pic2} alt="pic2" style={{height:'40px',maxWidth:'50px', marginRight:'20px'}}/>
                    <img src={pic3} alt="pic2" style={{height:'40px',maxWidth:'50px'}}/>
                    </div></li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="f2 fc">
          <h2 className='fh2'>About</h2>
          <ul className='f2ul'>
            <li>About Homebuyer</li>
            <li>Press</li>
            <li>Reviews</li>
            <li>Sitemap</li>
          </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="f3 fc">
          <h2 className='fh2'>Learn</h2>
          <ul className='f3ul'>
            <li>Learning Center</li>
            <li>$15,000 First-Time Home Buyer Tax Credit</li>
            <li>$25,000 Downpayment Toward Equity Act</li>
            <li>Free Homebuyer Education Course</li>
          </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="f4 fc">
          <h2 className='fh2'>Contact Us</h2>
          <ul className='f4ul'>
            <li>Get pre-approved</li>
            <li>99999999</li>
            <li>email id</li>
            <li>live chat</li>
          </ul>
          </div>
        </Grid>
      </Grid>
    </Box>
    <div className="socials" style={{float:'right', marginRight:'140px'}}>
        <Box sx={{flexGrow:1}}> 
        <Grid className='mainsocial' container spacing={8}>
      <Grid item xs={2} md={2} lg={2}> 
      <FaFacebookF className='socicons' color='white' size='18px' style={{backgroundColor:'#5462d1', padding:'9px', borderRadius:'90px'}}/>
      </Grid>
      <Grid item xs={2} md={2} lg={2}> 
      <FaTwitter className='socicons' color='white' size='18px' style={{backgroundColor:'#5462d1', padding:'9px', borderRadius:'90px'}}/>
      </Grid>
      <Grid item xs={2} md={2} lg={2}> 
      <FaInstagram className='socicons'  color='white' size='18px' style={{backgroundColor:'#5462d1', padding:'9px', borderRadius:'90px'}}/>
      </Grid>
      <Grid item xs={2} md={2} lg={2}> 
      <FaLinkedin className='socicons' color='white' size='18px' style={{backgroundColor:'#5462d1', padding:'9px', borderRadius:'90px'}}/>
      </Grid>
      <Grid item xs={2} md={2} lg={2}> 
      <FaYoutube className='socicons' color='white' size='18px' style={{backgroundColor:'#5462d1', padding:'9px', borderRadius:'90px'}}/>
      </Grid>
        </Grid>
        </Box>
 
    </div>
    </>
  )
}

export default Footer