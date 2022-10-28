import React from 'react'
import {SiBlockchaindotcom} from "react-icons/si";
import { GiMeepleCircle } from "react-icons/gi";
import {MdChat} from "react-icons/md";

const Sect9 = () => {
  return (
    <div className='blocks'>
        <div className="block1">
            <GiMeepleCircle className='iconsiz' color='var(--primary-color)' style={{height:'110px',width:'110px', justifyContent:'center', marginLeft:'40px'}}/>
            <p className='b1text iconsub'>Decentralised Identity</p>
        </div>
        <div className="block2">
            <SiBlockchaindotcom className='iconsiz' color='var(--primary-color)' style={{height:'110px',width:'110px', justifyContent:'center', marginLeft:'70px'}}/>
            <p className='b2text iconsub'>Blockchain-based marketplace</p>
        </div>
        <div className="block3">
            <MdChat className='iconsiz' color='var(--primary-color)' style={{height:'110px',width:'110px', justifyContent:'center', marginLeft:'75px'}}/>
            <p className='b3text iconsub'>24/7 Access to Mortgage Experts</p>
        </div>

    </div>
  )
}

export default Sect9