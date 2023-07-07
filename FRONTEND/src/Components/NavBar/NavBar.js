import { Component } from "react";
import "./NavBarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Green Care</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>
            <Link to="/signup" className="linkbtn">
              {" "}
              Sign Up
            </Link>
          </button>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
