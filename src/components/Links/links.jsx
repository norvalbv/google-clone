import { NavLink } from "react-router-dom";
import "./links.scss";
export const Links = () => {
  const links = [
    { url: "/search", text: "All" },
    { url: "/news", text: "News" },
    { url: "/images", text: "Images" },
    { url: "/videos", text: "Videos" },
  ];
  return (
    <div>
      {links.map(({ url, text }, index) => (
        <NavLink to={url} className="link" key={index}>{text}</NavLink>
      ))}
    </div>
  );
};
