import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rides from "./pages/Rides";
import Booking from "./pages/Booking";
import MyRides from "./pages/MyRides";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/rides"
          element={<Rides />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/my-rides"
          element={<MyRides />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;