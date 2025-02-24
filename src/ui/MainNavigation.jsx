import { NavLink } from "react-router-dom";

import Navigation from "../components/Navigation";

function MainNavigation() {
  return (
    <Navigation
      ulClassName="flex gap-menu font-medium font-size-h"
      linkClassName="text-neutral-900"
      activeClassName="underline"
      inactiveClassName="no-underline"
    >
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/a-propos">A Propos</NavLink>
    </Navigation>
  );
}

export default MainNavigation;
