import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import '../Card/Card.css'
import albumArt from '../../assets/Home/albumArt.png'
function Card({data,type}) {
  const getCardData =(type) =>{
    switch(type){
      case 'album': {
        const  {image,follows, title,slug,songs} = data;
       return (
        <Tooltip title={`${songs.length} songs`} placement='top' arrow>
    <div className='card-container'>
    <div className="card-content">
     <img style={{
         borderRadius: '8px 8px 0 0',
         
     }} src={image}/>
     <div className="card-follow-count"> 
         <p>{follows} Follows</p>
     </div>
    </div>
    <p className='card-category'>{title}</p>
 </div>
 </Tooltip>
)
      }

      
      default: return <></>
    }
  }
  return getCardData(type)
  // const  {image,follows, title,slug,songs} = data;
  // return (
  //   <div className='card-container'>
  //      <div className="card-content">
  //       <img style={{
  //           borderRadius: '8px 8px 0 0',
            
  //       }} src={image}/>
  //       <div className="card-follow-count"> 
  //           <p>{follows} Follows</p>
  //       </div>
  //      </div>
  //      <p className='card-category'>{title}</p>
  //   </div>
  // )
}

export default Card