import React, { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://google-search3.p.rapidapi.com/api/v1${type}`,
        {
          method: "GET",
          headers: {
            "x-user-agent": "desktop",
            "x-proxy-location": "EU",
            "x-rapidapi-host": "google-search3.p.rapidapi.com",
            "x-rapidapi-key":
              "dffcc5f24emsh89532c7a5575c02p168eddjsn47c9716293e9",
          },
        }
      );

      const data = await response.json();

      if (type.includes("/news")) {
        setResults(data.entries);
      } else if (type.includes("/images")) {
        setResults(data.image_results);
      } else {
        setResults(data.results);
      }
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <MainContext.Provider
      value={{
        results,
        getData,
        loading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
