import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/e-commerce-app">Store</NavLink>
          </li>
          <li>
            <NavLink to="add-product" relative="path">
              Admin page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
