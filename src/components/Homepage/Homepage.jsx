import React from 'react'
import '../Homepage/Homepage.css'
import headphones from '../../assets/HeroSection/headphones.png'

import Card from '../Card/Card'
function Homepage({data,newAlbumsData}) {
  return (
    <div className='homepage-container'>
        
        <div className="hero-section-container">
            <div className='hero-text'>
            <p >100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
            </div>
            <img src={headphones } alt='vibrating-headphones'/>

        </div>
        <div className='albums-section'>
        <div className="top-albums">
          <div className='albums-header'>
          <h4 >Top Albums</h4>
          <h6 >Show All</h6>
          </div>
          
          
        <div className='card'>

        {data.map((item)=>
        
        <Card data={item} type='album' key={item.id}/>
        
        )}
        
        </div>
        </div>
        <div className='new-albums card'>
          <div className='albums-header'>

       <h4>New Albums</h4>
       <h5>Show All</h5>
          </div>
          {newAlbumsData.map((item)=>
        
        <Card data={item} type='album' key={item.id}/>
        
        )}

        </div>
        </div>

    </div>
  )
}

export default Homepage