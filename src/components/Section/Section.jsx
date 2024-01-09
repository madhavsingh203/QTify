import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Carousel from "../Carousel/Carousel";
import { Tab, Tabs } from "@mui/material";
// register Swiper custom elements
register();

const Section = ({ data, sectionName, carouselKey, hideShowAll, tabs }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [showAll, setShowAll] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    if (tabs && activeTab !== "all") {
      const extractedData = data?.filter(
        (song) => song?.genre?.key === activeTab
      );
      setFilteredData(extractedData);
      console.log("Came here")
    }else{
      setFilteredData(data)
    }
  }, [activeTab,data]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <div className=" text-white">
      <div className="flex justify-between">
        <h4>{sectionName}</h4>
        {!hideShowAll && (
          <h6 className="text-primary cursor-pointer" onClick={handleShowAll}>
            {showAll ? "Show All" : "Collapse"}
          </h6>
        )}
      </div>
      {tabs && (
        <div className="text-white">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="white"
          >
            <Tab label="All" value={"all"} />
            <Tab label="Rock" value={"rock"} />
            <Tab label="Pop" value={"pop"} />
            <Tab label="Jazz" value={"jazz"} />
            <Tab label="Blues" value={"blues"} />
          </Tabs>
        </div>
      )}

      <div className="w-full">
        {showAll ? (
          <Carousel
            data={tabs ? filteredData : data}
            key={sectionName}
            carouselKey={carouselKey}
          />
          // <></>
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
