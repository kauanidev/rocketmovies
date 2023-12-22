import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};
