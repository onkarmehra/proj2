import React from 'react'
import bell from './images/bell.webp'
import rate from './images/rate.webp'
import sms from './images/sms.webp'

const Sect9 = () => {
  return (
    <div className='blocks'>
        <div className="block1">
            <img style={{height:'150px',width:'150px', justifyContent:'center', marginLeft:'36px'}} src={bell} alt="bell" />
            <p  className='b1text'>Personalized Mortgage Advice</p>
        </div>
        <div className="block2">
            <img style={{height:'150px',width:'150px', justifyContent:'center', marginLeft:'41px'}} src={rate} alt="rate" />
            <p className='b2text'>Guaranteed Low Mortgage Rates</p>
        </div>
        <div className="block3">
            <img style={{height:'150px',width:'150px', justifyContent:'center', marginLeft:'38px'}} src={sms} alt="sms" />
            <p className='b3text'>24/7 Access to Mortgage Experts</p>
        </div>

    </div>
  )
}

export default Sect9