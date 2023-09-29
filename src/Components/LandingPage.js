import React from 'react'
import './LandingPage.css'
import {Link} from 'react-router-dom'
import Landingimg from './Assests/LandImage.svg'
function LandingPage() {
  return (
    <div className='main'>
      <div className='image'>
        <img src={Landingimg} alt="abc" />
      </div>

      <div className='title'>
        <p style={{fontWeight:'2500',fontSize:'60px',marginBottom:'0px'}}><b>Blockchain Based FIR System</b></p>
        <p>
        <span style={{fontWeight:'1000',fontSize:'30px',color:'rgb(8 145 178)'}}>Efficient, </span>
        <span style={{fontWeight:'1000',fontSize:'30px',color:'rgb(15 118 110)'}}>Transparent, </span>
        <span style={{fontWeight:'1000',fontSize:'30px',color:'rgb(244 63 94)'}}>Secure.</span>
        </p>
        
        <Link to='Form'>
            <button style={{fontWeight:'bold',fontSize:'20px',padding:'10px',marginBottom:'10px',marginTop:'30px'}}>Save FIR to Database</button>
        </Link>

        <Link to='Blockchain'>
            <button style={{fontWeight:'bold',fontSize:'20px',padding:'10px',marginBottom:'10px'}}>Save FIR to Blockchain</button>
        </Link>

      </div>
    </div>
  )
}

export default LandingPage