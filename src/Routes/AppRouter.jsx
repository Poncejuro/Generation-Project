import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { About } from "../Pages/About/About";
import { ContactForm } from "../Pages/ContactForm/ContactForm";
import { Profile } from "../Pages/Profile/Profile";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AboutUs" element={<About />} />
        <Route path="Contact" element={<ContactForm />} />
        <Route path="Profile" element={<Profile />} />

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
