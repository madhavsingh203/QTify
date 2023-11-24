import React from 'react'
import { useSwiper } from 'swiper/react'

const SwiperButtons = () => {
    const swiper = useSwiper()
  return (
    <div className='swiper-nav-btns z-10'>
        <button onClick={()=>swiper?.slideNext()}>Next</button>
        <button onClick={()=>swiper?.slidePrev()}>Previous</button>
    </div>
  )
}

export default SwiperButtons