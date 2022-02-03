import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const updatedMenu = () => {
    if (document.getElementById("responsive-menu").checked === true) {
      document.getElementById("menu").style.borderBottomRightRadius = "0";
      document.getElementById("menu").style.borderBottomLeftRadius = "0";
    } else {
      document.getElementById("menu").style.borderRadius = "10px";
    }
  };
  return (
    <>
      <nav id="menu">
        <input type="text" />
        <input
          type="checkbox"
          id="responsive-menu"
          onClick={() => updatedMenu()}
        />
        <label></label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/" className="dropdown-arrow">
              Exercises
            </Link>
            <ul className="sub-menus">
              <li>
                <Link to="/exercise1">Exercise 1</Link>
              </li>
              <li>
                <Link to="/exercise2">Exercise 2</Link>
              </li>
              <li>
                <Link to="/exercise3">Exercise 3</Link>
              </li>
              <li>
                <Link to="/exercise4">Exercise 4</Link>
              </li>
              <li>
                <Link to="/exercise5">Exercise 5</Link>
              </li>
              <li>
                <Link to="/exercise6">Exercise 6</Link>
              </li>
              <li>
                <Link to="/exercise7">Exercise 7</Link>
              </li>
              <li>
                <Link to="/exercise8">Exercise 8</Link>
              </li>
              <li>
                <Link to="/exercise9">Exercise 9</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="http://">About</Link>
          </li>
          <li>
            <Link to="http://" className="dropdown-arrow">
              Services
            </Link>
            <ul className="sub-menus">
              <li>
                <Link to="http://">Services Sub Menu 1</Link>
              </li>
              <li>
                <Link to="http://">Services Sub Menu 2</Link>
              </li>
              <li>
                <Link to="http://">Services Sub Menu 3</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="http://">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export { Layout };
