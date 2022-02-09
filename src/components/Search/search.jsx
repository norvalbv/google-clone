import { useMainContext } from "../../Context/maincontextprovider.js";
import { useState, useEffect } from "react";
import "./search.scss";
import { useDebounce } from "use-debounce";
import { NavLink } from "react-router-dom";

export const Search = () => {
  const [dark, setDark] = useState(false);

  const [search, setSearch] = useState("");
  const { setSearchTerm } = useMainContext();
  const [debouncedValue] = useDebounce(search, 350);

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
    console.log(e.target.value)
    if (e.target.value === "Search") {
      console.log(e.target.value + "search");
      <NavLink to={"/search"} className="link"></NavLink>;
    } else if (e.target.value === "Images") {
      <NavLink to={"/images"} className="link"></NavLink>;
    }
  };

  return (
    <div className="search-section">
      <button
        className="theme search-section-theme"
        onClick={() => setDark(!dark)}
      >
        {dark ? "Dark" : "Light"}
      </button>
      <header>
        <h1>Benji's Google Clone</h1>
      </header>
      <div className="search-field">
        <select id="search-dropdown" onChange={handleSearchChange}>
          <option>Search</option>
          <option>Images</option>
          <option>News</option>
          <option>Videos</option>
        </select>
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
