import "./navbar.scss";
import React, { useState } from "react";
import { Link, Route, Routes, Redirect } from "react-router-dom";

export function NavBar() {
  const [dark, setDark] = useState(true);

  const handleTheme = () => {
    setDark(!dark);
  }

  const [search, setSearch] = useState("");


  const handleChange = e => {
    console.log(e.target.value)
    setSearch(e.target.value);
  }


  return (
    <nav>
      <div className="logo">
        {/* <Routes>
          <Route>
            <Link to="/"> */}
            {/* <Redirect to="/search"> */}
              <p className="logo">Benji Search</p>
            {/* </Redirect> */}
            {/* </Link>
          </Route>
        </Routes> */}
      </div>
      <div className="search">
        <input type="text" placeholder="Search" value={search} onChange={handleChange} />
      </div>
      <div className="theme">
        <button onClick={handleTheme}>{dark ? "dark" : "light"}</button>
      </div>
    </nav>
  );
}
