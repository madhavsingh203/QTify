import React, { useState } from "react";
import Card from "../Card/Card";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Carousel from "../Carousel/Carousel";
// register Swiper custom elements
register();

const Section = ({ data, sectionName, carouselKey }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [showAll, setShowAll] = useState(true);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className=" text-white ">
      <div className="flex justify-between">
        <h4>{sectionName}</h4>
        <h6 className="text-primary cursor-pointer" onClick={handleShowAll}>
          {showAll ? "Show All" : "Collapse"}
        </h6>
      </div>

      <div>
        {showAll ? (
          <Carousel data={data} key={sectionName} carouselKey={carouselKey}/>
        ) : (
          <div className="flex flex-row flex-wrap gap-5">
            {data?.map((item) => (
              <Card data={item} type="album" key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
