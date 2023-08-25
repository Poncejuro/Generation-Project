import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { HomePage } from "../Pages/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Profile } from "../Pages/Profile";
import { Profile2 } from "../Pages/Profile2";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="AboutUs" element={<About />} />
        <Route path="Register" element={<Register />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Profile2" element={<Profile2 />} />

        <Route
          path="HomePage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
