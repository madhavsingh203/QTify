import React, { useEffect, useState } from "react";
import "../Homepage/Homepage.css";
import headphones from "../../assets/HeroSection/headphones.png";

import Card from "../Card/Card";
import Section from "../Section/Section";
import { backend_endpoint } from "../../api/api";
import axios from "axios";
import Faq from "../FAQ/Faq";
function Homepage({ data, newAlbumsData }) {


  const [allSongs, setAllSongs] = useState([]);

  const fetchAllSongs = async () => {
    const response = await axios.get(`${backend_endpoint}/songs`);
    
    setAllSongs(response.data);
    
  };

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return (
    <div className="px-4 w-full">
      <div className="hero-section-container flex-wrap">
        <div className="hero-text">
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <img src={headphones} alt="vibrating-headphones" />
      </div>

      <div className="flex flex-col gap-10 w-full">
        <Section
          data={data}
          sectionName={"Top Albums"}
          carouselKey="carousel1"
        />

        <Section
          data={newAlbumsData}
          sectionName={"New Albums"}
          carouselKey="carousel2"
        />
        <Section
          data={allSongs}
          sectionName={"Songs"}
          carouselKey={"Songs"}
          hideShowAll
          tabs
        />
        <Faq/>
      </div>
    </div>
  );
}

export default Homepage;
