// MainMenu.jsx
import { Navbar, NavbarItem } from "../components/Navbar";
import "./MainNavigation.scss";

export default function NavbarMenu({ current }) {
  return (
    <Navbar customClass="main-navigation">
      <NavbarItem href="/" current={current === "home"}>
        Accueil
      </NavbarItem>
      <NavbarItem href="/a-propos" current={current === "about"}>
        A Propos
      </NavbarItem>
    </Navbar>
  );
}
