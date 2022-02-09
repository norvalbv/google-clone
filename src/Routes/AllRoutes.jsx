import { useRoutes, Navigate } from "react-router-dom";
import { Results } from "../components/Results/results";

const AllRoutes = () => {
  return useRoutes([
    { index: true, element: <Navigate to="/search" /> },
    { path: "/search", element: <Results /> },
    { path: "/images", element: <Results /> },
    { path: "/videos", element: <Results /> },
    { path: "/news", element: <Results /> },
  ]);
};

export default AllRoutes;