import { useMainContext } from "../../Context/maincontextprovider.js";
import { useState, useEffect } from "react";
import "./search.scss";
import { useDebounce } from "use-debounce";
import { NavLink } from "react-router-dom";

export const Search = ({ darkmode, setDarkMode }) => {
  const [search, setSearch] = useState("");
  const { setSearchTerm } = useMainContext();
  const [debouncedValue] = useDebounce(search, 550);

  useEffect(() => {
    if (debouncedValue) {
      console.log(debouncedValue);
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Search") {
      console.log(e.target.value + "search");
      <NavLink to={"/search"} className="link"></NavLink>;
    } else if (e.target.value === "Images") {
      <NavLink to={"/images"} className="link"></NavLink>;
    }
  };

  return (
    <div className={darkmode ? "search-section dark" : "search-section light"}>
      <button className="search-section-theme" onClick={setDarkMode}>
        {darkmode ? "Dark" : "Light"}
      </button>
      <header>
        <h1>Benji's Google Clone</h1>
      </header>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search The Google Clone"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
