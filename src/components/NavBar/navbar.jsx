import "./navbar.scss";
import { useMainContext } from "../../Context/maincontextprovider.js";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import { Links } from "../Links/links";

export function NavBar() {
  const [dark, setDark] = useState(true);

  const handleTheme = () => {
    setDark(!dark);
  };

  const [search, setSearch] = useState("");
  const { setSearchTerm } = useMainContext();
  const [debouncedValue] = useDebounce(search, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <p id="logo">Google Clone</p>
        </Link>
      </div>
      <div className="search">
        <Links />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="theme">
        <button onClick={handleTheme}>{dark ? "dark" : "light"}</button>
      </div>
    </nav>
  );
}
