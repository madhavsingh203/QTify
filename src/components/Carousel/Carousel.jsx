import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./carousel.css";
import Card from "../Card/Card";
import SwiperButtons from "./SwiperButtons";

import {ReactComponent as NextIcon} from '../../assets/next-icon.svg'
import {ReactComponent as PrevIcon} from '../../assets/prev-icon.svg'


const Carousel = ({ data, carouselKey }) => {
  
const sliderSettings = {
  440: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  680: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 7,
    spaceBetween: 30,
  },
};
  return (
    <div className="relative">
    <Swiper
    key={carouselKey}
    breakpoints={sliderSettings}
      modules={[Virtual, Navigation, Pagination]}
      slidesPerView={7}
      spaceBetween={20}
      navigation={{
        nextEl: `.arrow-right-${carouselKey}`,
          prevEl: `.arrow-left-${carouselKey}`,
      }}
      virtual
    >
      {data?.map((item, index) => (
        <SwiperSlide key={item.id} virtualIndex={index}>
          <Card data={item} type="album" key={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className={`arrow-right-${carouselKey} absolute -right-3 top-1/3 z-10 bg-white rounded-full`}><NextIcon /></div>
      <div className={`arrow-left-${carouselKey} absolute -left-5 top-1/3 z-10 bg-white rounded-full`}><PrevIcon /></div>
      </div>
  );
};

export default Carousel;
