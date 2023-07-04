import { Component } from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Green Care</h1>

        <ul className="nav-menu">
          <li>
            <Link to="/">
              <i className="fa-solid fa-house-chimney"></i>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
