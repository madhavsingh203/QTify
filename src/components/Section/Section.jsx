import React from "react";
import Card from "../Card/Card";

const Section = ({ data, sectionName }) => {
  return (
    <div className=" text-white ">
      <div className="flex justify-between">
        <h4>{sectionName}</h4>
        <h6 className="text-primary">Show All</h6>
      </div>

      <div className="flex flex-row flex-wrap gap-5">
        {data?.map((item) => (
          <Card data={item} type="album" key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Section;
