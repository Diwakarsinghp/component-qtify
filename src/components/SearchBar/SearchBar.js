import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <input className="search" placeholder="Search a song for your choice" />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;