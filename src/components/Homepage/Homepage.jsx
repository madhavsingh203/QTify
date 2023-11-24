import React from "react";
import "../Homepage/Homepage.css";
import headphones from "../../assets/HeroSection/headphones.png";

import Card from "../Card/Card";
import Section from "../Section/Section";
function Homepage({ data, newAlbumsData }) {
  console.log("data::", data);
  return (
    <div className="homepage-container">
      <div className="hero-section-container ">
        <div className="hero-text">
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <img src={headphones} alt="vibrating-headphones" />
      </div >

      <div className="flex flex-col gap-10">

      <Section data={data} sectionName={"Top Albums"} />

      <Section data={newAlbumsData} sectionName={"New Albums"} />
      </div>

    </div>
  );
}

export default Homepage;
