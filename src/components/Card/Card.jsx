import React from 'react'
import '../Card/Card.css'
import albumArt from '../../assets/Home/albumArt.png'
function Card() {
  return (
    <div className='card-container'>
       <div className="card-content">
        <img style={{
            borderRadius: '8px 8px 0 0'
        }} src={albumArt}/>
        <div className="card-follow-count"> 
            <p>100 Folows</p>
        </div>
       </div>
       <p className='card-category'>New Bollywood</p>
    </div>
  )
}

export default Card