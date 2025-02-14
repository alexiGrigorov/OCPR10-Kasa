import { Link } from "react-router-dom";

import "./Navbar.scss";

export function NavbarItem({ href, children, current = false }) {
  return (
    <li className={`navbar-item ${current ? "current" : ""}`}>
      <Link to={href}>{children}</Link>
    </li>
  );
}

export function Navbar({ children, customClass }) {
  return (
    <nav className={["navbar", customClass].filter(Boolean).join(" ")}>
      <ul>{children}</ul>
    </nav>
  );
}
