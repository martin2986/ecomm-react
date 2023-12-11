// import classes from "./Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const Search = ({ handleChange }) => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <form>
      <input type="search" required onChange={searchHandler} value={search} />
      <SearchIcon className=" searchIcon" />
    </form>
  );
};

export default Search;
