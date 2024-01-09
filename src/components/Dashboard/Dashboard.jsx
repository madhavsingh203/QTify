import React from "react";
import NavBar from "../Navbar/NavBar";
import Homepage from "../Homepage/Homepage";
import Loader from "../Loader/Loader";

function Dashboard({ data, newAlbumsData, loading }) {
  return (
    <div className="w-full">
      <NavBar />
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">

        <Loader />
        </div>
      ) : (
        <Homepage data={data} newAlbumsData={newAlbumsData} />
        // <></>
      )}
    </div>
  );
}

export default Dashboard;
