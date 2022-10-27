import React from 'react'

const Subscribe = () => {
  return (
    <div style={{height:'300px',textAlign:'center', backgroundColor:'white'}}>
        <h2 style={{fontSize:'50px'}}>Subscribe to our newsletter</h2>
        <h3 style={{fontSize:'20px'}}>Receive real estate and mortgage news by email weekly.</h3>
        <h3 style={{fontSize:'20px'}}>Personalized for you & your specific homebuying goals.</h3>
        <div className="form" style={{display:'flex', justifyContent:'center'}}>
        <form>
        <input className='subsinput' style={{width:'100%', border:'2px solid #5462d1', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px', borderTopRightRadius:'0px', borderBottomRightRadius:'0px', borderRight:'0px', fontSize:'25px', padding:'10px'}} type="text" id="fname" name="fname" value="John"/>
        </form>
        <button style={{backgroundColor:'#5462d1', fontSize:'18px', borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px', borderTopRightRadius:'10px', borderBottomRightRadius:'10px', padding:'10px', color:'white', borderLeft:'0px', borderColor:'#5462d1'}}>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe