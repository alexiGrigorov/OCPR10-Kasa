import { NavLink } from "react-router-dom";

import Navigation from "../components/Navigation";

function MainNavigation() {
  return (
    <Navigation
      ulClassName="d-flex gap-menu text-medium font-size-h"
      linkClassName="text-neutral-900"
      activeClassName="text-decoration-underline"
      inactiveClassName="text-decoration-none"
    >
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/a-propos">A Propos</NavLink>
    </Navigation>
  );
}

export default MainNavigation;
