import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="flex h-10 gap-5 justify-between w-full">

      <Logo />
      <SearchBar />
      </div>
      <Button text="Give FeedBack" />
    </nav>
  );
};

export default NavBar;
