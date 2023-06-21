import React from 'react'
import '../Homepage/Homepage.css'
import headphones from '../../assets/HeroSection/headphones.png'
import Card from '../Card/Card'
function Homepage() {
  return (
    <div className='homepage-container'>
        
        <div className="hero-section-container">
            <div className='hero-text'>
            <p >100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
            </div>
            <img src={headphones } alt='vibrating-headphones'/>

        </div>
    <Card/>
    </div>
  )
}

export default Homepage