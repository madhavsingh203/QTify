import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import CustomModal from "../CustomModal/CustomModal";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false)

  const handleFeedback = ()=>{
    setShowModal(true)
    
  }

  const handleModalClose = ()=>{
    setShowModal(false)
  }

  return (
    <nav className="flex bg-primary px-2 items-center justify-between h-16">
      <Logo />
      <SearchBar />
      <Button onClick={handleFeedback} text="Give FeedBack" />
      {showModal && <CustomModal open={showModal} handleClose={handleModalClose}/>}
    </nav>
  );
};

export default NavBar;
