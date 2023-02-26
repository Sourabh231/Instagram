import React from 'react'
import Image from '../Images/lens.png'
import './LandingPage.css'
import { Link } from 'react-router-dom'
export default function LandingPage() {
  return (
    <div className='container'>
        <div className='left'>
           <img src={Image} alt="first-page" id='image'/>
        </div>
        <div className='right'>
             <h2 className='heading'>10X Team 04</h2>
             <Link to='PostView'><button>Enter</button></Link>
        </div>   
    </div>
  )
}
