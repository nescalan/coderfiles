import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav id="menu">
        <input type="text" />
        <input type="checkbox" id="responsive-menu" />
        <label></label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/" class="dropdown-arrow">
              Exercises
            </Link>
            <ul class="sub-menus">
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
            <Link to="http://" class="dropdown-arrow">
              Services
            </Link>
            <ul class="sub-menus">
              <li>
                <Link to="http://">Services 1</Link>
              </li>
              <li>
                <Link to="http://">Services 2</Link>
              </li>
              <li>
                <Link to="http://">Services 3</Link>
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
