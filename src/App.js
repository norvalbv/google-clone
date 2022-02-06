import "./app.scss";
import React, { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar/navbar";
import { Footer } from "./components/Footer/footer";
// import { Routes } from "./components/Routes/routes";

function App() {
  const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch(
  //     "https://google-search1.p.rapidapi.com/google-search?hl=en&q=Avengers%2BEndgame&gl=us",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "google-search1.p.rapidapi.com",
  //         "x-rapidapi-key":
  //           "dffcc5f24emsh89532c7a5575c02p168eddjsn47c9716293e9",
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       setData(response)
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div className="App" onClick={() => setData("Sasd")}>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
