import React from 'react'
import {FaWindowClose} from "react-icons/fa"
import Navbar from './components/navbar'

const Bar1 = () => {
  return (
    <div className='firstbar'>
        <div className="textbar1div">
      <p className='textbar1'>Get <a href="#">your mortgage rate</a> now</p>
        </div>
        <div className="icon1bar">
      <FaWindowClose className='icon1'/>
        </div>
    </div>
    
  )
}

export default Bar1
