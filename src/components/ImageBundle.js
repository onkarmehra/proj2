import React from 'react'
import wsj from '../images/wsj.png'
import cnbc from '../images/CNBC.webp'
import bloomberg from '../images/Bloomberg.png'
import yahoo from '../images/Yahoo-Finance.png'
import time from '../images/Time.webp'

const ImageBundle = () => {
  return (
    <div className='ib' style={{backgroundColor:'var(--primary-color)'}}>
        <img className='pic pic1' src={wsj} alt="Wall Street Journal" />
        <img className='pic pic2' src={cnbc} alt="cnbc" />
        <img className='pic pic3' src={bloomberg} alt="bloomberg" />
        <img className='pic pic4' src={yahoo} alt="yahoo" />
        <img className='pic pic5' src={time} alt="time" />
    </div>
  )
}

export default ImageBundle