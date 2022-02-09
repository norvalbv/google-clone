import "./app.scss";
import { NavBar } from "./components/NavBar/navbar";
import { Footer } from "./components/Footer/footer";
import AllRoutes from "./Routes/AllRoutes";
import { useMainContext } from "./Context/maincontextprovider";
import { Search } from "./components/Search/search";
import { useEffect } from "react";

function App() {
  const { searchTerm } = useMainContext();

  if (searchTerm === "") {
    return <Search />;
  }

  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
