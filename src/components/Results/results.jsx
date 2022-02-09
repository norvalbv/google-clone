import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useMainContext } from "../../Context/maincontextprovider.js";
import { Loading } from "../Loading/loading.jsx";
import "./results.scss";

export const Results = () => {
  const { results, loading, getData, searchTerm } = useMainContext();
  const location = useLocation();

  useEffect(() => {
    console.log(searchTerm + "from result section?")
    if (searchTerm !== "") {
      if (location.pathname === "videos") {
        getData(`/search/q=${searchTerm} videos`);
      } else {
        getData(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="results">
          {results?.map(({ link, title, desc }, index) => (
            <div key={index} className="result">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <h2 className="title">{title}</h2>
                <p className="link">{link}</p>
                <p className="desc">{desc === null ? null : desc}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div>
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              href={href}
              target="_blank"
              key={index}
              rel="noreferrer noopener"
              className="sm:p-3 p-5"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p>{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="results">
          {results?.map(({ links, title, source }, index) => (
            <div key={index} className="result">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="title">{title}</h2>{" "}
              </a>

              <a href={source?.href} target="_blank" rel="noopener noreferrer">
                {source?.href}
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="results">
          {results?.map((video, index) => (
            <div key={index} className="result">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );
    default:
      return "ERROR!";
  }
};
