import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Store</NavLink>
          </li>
          <li>
            <NavLink to="/add-product">Admin page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
