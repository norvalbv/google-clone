import "./navbar.scss";
import { useMainContext } from "../../Context/maincontextprovider.js";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import { Links } from "../Links/links";

export function NavBar({ darkmode, setDarkMode }) {
  const [search, setSearch] = useState("");
  const { setSearchTerm, SearchTerm } = useMainContext();
  const [debouncedValue] = useDebounce(search, 550);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/search" id="link-logo">
          <p id="logo">Google Clone</p>
        </Link>
      </div>
      <div className="search">
        <Links darkmode={darkmode} />
        <input
          type="text"
          placeholder="Search"
          value={SearchTerm === "" ? search : SearchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="theme">
        <button onClick={setDarkMode}>{darkmode ? "dark" : "light"}</button>
      </div>
    </nav>
  );
}
