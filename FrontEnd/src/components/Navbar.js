import logo from "../logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <Link
        to="/"
        style={{ color: "#d42f23", marginRight: 10, marginLeft: 10 }}
      >
        Home
      </Link>
      <Link to="/create" style={{ color: "#d42f23", marginRight: 10 }}>
        Create
      </Link>
      <Link to="/list" style={{ color: "#d42f23" }}>
        Display
      </Link>
    </div>
  );
}

export default Navbar;
