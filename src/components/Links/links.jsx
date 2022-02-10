import { NavLink } from "react-router-dom";
import "./links.scss";
export const Links = ({ darkmode }) => {
  const links = [
    { url: "/search", text: "All" },
    { url: "/news", text: "News" },
    { url: "/images", text: "Images" },
  ];

  return (
    <div className="link-selection">
      {links.map(({ url, text }, index) => (
        <NavLink
          to={url}
          key={index}
          className={
            darkmode ? "individual-dark" : "individual-light"
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

// const handleChange = (e) => {
//   const eLink = e.target.value;
//   console.log(eLink);
//   switch (eLink) {
//     case "Search":
//       return <NavLink to="/search" />;
//     case "News":
//       console.log("NASDASD")
//       return <NavLink to="/news" />;
//     case "Images":
//       return <NavLink to="/images" />;
//     case "Videos":
//       return <NavLink to="/videos" />;
//     default:
//       return "ERROR";
//   }
// // };
// return (
//   <select id="search-dropdown" onChange={handleChange}>
//     <option>Search</option>
//     <option>Images</option>
//     <option>News</option>
//     <option>Videos</option>
//   </select>
// );
