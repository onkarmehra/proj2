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
import Resec2 from './resec2'
import Footer from './Footer'
import Bottom from './Bottom'
import Subscribe from './Subscribe'


const Layout = () => {
  return (
    <div>
      <div style={{position:'fixed', top:0, left:0, right:0}}>
      <Bar1/> 
      <Navbar/>
      </div>
      <div style={{paddingTop:'130px',marginBottom:'-258px', backgroundColor:'var(--primary-color)'}}>
      <Resec2/>
      </div>
      <Button/>
      <h5 className='mtext'>As seen on</h5>
      <ImageBundle/>
      <div style={{backgroundColor:'white'}}>
      <Sect7/>
      <Sect8/>
      <h3 style={{textTransform:'uppercase',textAlign:'center',fontSize:'24px'}}>mortgage with confidence</h3>
      <div className='mwc'style={{maxWidth:'700px',marginLeft:'25vw',marginBottom:'50px'}}>
      <h2 style={{textAlign:'center',fontSize:"36px",fontWeight:'100',color:'#5462d1'}}>We only work with first-time buyers, so we’re really good at it.</h2>
      </div>
      <Sect9/>
      <Stars/>
      <Subscribe/>
      </div>
      <div className="footmargin">
      <Footer/>
      </div>
      <div style={{borderBottom:'1px solid black', marginTop:'50px', width:'78vw',marginLeft:'110px'}}></div>
      <Bottom/>
    </div>
    
  )
}

export default Layout
