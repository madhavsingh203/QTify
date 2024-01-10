import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backend_endpoint } from "../../api/api";
import PlaylistTable from "./PlaylistTable";
import Loader from "../Loader/Loader";

const Playlist = () => {
  const { slug } = useParams();

  const [playlistData, setPlaylistData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlaylistData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backend_endpoint}/album/${slug}`);
      console.log(response?.data);
      setPlaylistData(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error::", error);
    }
  };

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Loader />
        </div>
      ) : (
        <div className="text-white px-2 md:px-3 md:pl-8 mt-4">
          <div className="flex gap-2 md:gap-10 items-center justify-center">
            <img
              height={"100px"}
              width={"100px"}
              className="rounded-lg"
              src={playlistData?.image}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{playlistData?.title}</h2>
              <p>{playlistData?.description}</p>
              <div className="flex gap-3 items-center">
                <p>{playlistData?.songs?.length} songs</p>
                <div className="rounded-full w-2 h-2 bg-white border border-white"></div>
                <p>{playlistData?.follows} follows</p>
              </div>
            </div>
          </div>
          <div className="mt-16">

          <PlaylistTable tableData={playlistData?.songs} />
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
