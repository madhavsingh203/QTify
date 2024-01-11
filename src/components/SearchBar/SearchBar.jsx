import "./SearchBar.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { IconButton } from "@mui/material";
const SearchBar = ({setSearchText, searchText}) => {
  return (
    <>
      <div className="relative">
        <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="pl-2 pr-10 h-10 rounded-lg " type="search" />
        <IconButton className="absolute right-10">
          <SearchIcon />
        </IconButton>
      </div>
    </>
  );
};

export default SearchBar;
