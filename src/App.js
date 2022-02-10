import "./app.scss";
import { NavBar } from "./components/NavBar/navbar";
import { Footer } from "./components/Footer/footer";
import AllRoutes from "./Routes/AllRoutes";
import { useMainContext } from "./Context/maincontextprovider";
import { Search } from "./components/Search/search";
import { useState, useEffect } from "react";

function App() {
  const { searchTerm } = useMainContext();

  const [darkmode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode(!darkmode);
  };

  useEffect(() => {
    localStorage.setItem("Theme", darkmode);
    console.log(localStorage);
  }, [darkmode]);

  const currentTheme = localStorage.getItem("Theme");

  useEffect(() => {
    currentTheme ? setDarkMode(true) : setDarkMode(false);
  }, []);

  if (searchTerm === "") {
    return <Search darkmode={darkmode} setDarkMode={handleTheme} />;
  }

  return (
    <div className={darkmode === true ? "dark" : "light"}>
      <NavBar darkmode={darkmode} setDarkMode={handleTheme} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
