import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { About } from "../Pages/About/About";
import { ContactForm } from "../Pages/ContactForm/ContactForm";
import { Profile } from "../Pages/Profile/Profile";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Login/Register";
import { Friends } from "../Pages/Friends/Friends";
import { Events } from "../Pages/Events/Events";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="AboutUs" element={<About />} />
        <Route path="Contact" element={<ContactForm />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Friends" element={<Friends />} />
        <Route path="Events" element={<Events />} />
        {/*<Route path="*" element={  <NotFound /> } />*/}
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
