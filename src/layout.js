import React from 'react'
import Bar1 from './Bar1'
import Navbar from './components/navbar'
import Sect2 from './components/sect2'
import Button from './components/Button'
import pic from './images/homebuyer-illustation-1200px (1).jpeg'
import ImageBundle from './components/ImageBundle'
import Sect7 from './Sect7'
import Sect8 from './Sect8'
import Sect9 from './Sect9'
import Stars from './Stars'
import ResponsiveAppBar from './components/ncheck'
import Carousel from './Carousel'

const Layout = () => {
  return (
    <div>
      <Bar1/> 
      <Sect2/>
      <Button/>
      <div className="imag1">
      <img src={pic} alt="Here is image" />
      </div>
      <h5 className='mtext'>As seen on</h5>
      <ImageBundle/>
      <Sect7/>
      <Sect8/>
      <h3 style={{textTransform:'uppercase',textAlign:'center',fontSize:'24px'}}>mortgagae with confidence</h3>
      <div style={{maxWidth:'700px',marginLeft:'400px',marginBottom:'50px'}}>
      <h2 style={{textAlign:'center',fontSize:"36px",fontWeight:'100',color:'#5462d1'}}>We only work with first-time buyers, so we’re really good at it.</h2>
      </div>
      <Sect9/>
      <Stars/>
    </div>
    
  )
}

export default Layout
