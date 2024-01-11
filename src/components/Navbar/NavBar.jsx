import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import CustomModal from "../CustomModal/CustomModal";
import { useSongs } from "../../context/SongsContext";
import { useNavigate } from "react-router-dom";

const NavBar = ({ topAlbums,newAlbums }) => {
  const { allSongs } = useSongs();
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  // const [allAlbums, setAllAlbums] = useState([])
  const navigate = useNavigate()

  const allAlbums = [...topAlbums, ...newAlbums]

  console.log(allAlbums); 

  const handleFeedback = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const filteredData = allAlbums.filter((song) => {
    const titleMatch = song.title.toLowerCase().includes(searchText.toLowerCase());
    const artistsMatch = Array.isArray(song.artists) && song.artists.some((artist) =>
      artist.toLowerCase().includes(searchText.toLowerCase())
    );
  
    console.log("titleMatch:", titleMatch);
    console.log("artistsMatch:", artistsMatch);
    console.log("searchText:", searchText);
  
    return titleMatch || (artistsMatch ?? false);
  });
  
  
  const handleAlbumClick = (album)=>{
    navigate(`/${album?.slug}`)
    setSearchText("")
  }
  

  console.log(filteredData);

  return (
    <div className="relative">
      <nav className="flex  z-20 bg-primary px-2 items-center justify-between h-16 shadow">
        <Logo />
        <div className="relative z-5">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
          />
          {searchText && (
            <div className="absolute flex flex-col gap-3 top-12 max-w-[700px] rounded border border-primary bg-black text-white p-3 z-10 ">
              {
              filteredData.length === 0 ? <div>No Matching Results Found!</div>
              :
              filteredData?.map((album) => (
                <React.Fragment key={album?.id}>
                <div onClick={()=>handleAlbumClick(album)} className="flex flex-col cursor-pointer hover:scale-105" >
                  <div className="flex items-center gap-1">

                  <img src={album?.image} className="w-16 h-20 rounded-lg"/>
                  {album?.title}
                  </div>
                  <div>

                  {
                    album.artists?.map((artist)=>(
                      <div className="text-white" key={album?.id}>{artist}</div>
                      ))
                    }
                    </div>

                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        <Button onClick={handleFeedback} text="Give FeedBack" />
        {showModal && (
          <CustomModal open={showModal} handleClose={handleModalClose} />
        )}
      </nav>
    </div>
  );
};

export default NavBar;
