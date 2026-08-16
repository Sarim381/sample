import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          🚕 BhaiRider
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rides">Rides</Link>
          <Link to="/my-rides">My Rides</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;