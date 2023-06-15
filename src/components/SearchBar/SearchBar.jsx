import "./SearchBar.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
const SearchBar = () => {
  return (
    <>
      <div className="container">
        <input className="searchBar" type="search" />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
