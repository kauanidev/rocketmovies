import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewMovie } from "../pages/NewMovie";
import { Profile } from "../pages/Profile";
import { MovieDetails } from "../pages/MovieDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-movie" element={<NewMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};
