import Icon from "../components/Icon";
import Logo from "../assets/svgs/logo.svg?react";

import MainNavigation from "./MainNavigation";

export default function Header({ current }) {
  return (
    <header className="space-between">
      <Icon
        svg={<Logo />}
        width="var(--space-4xl)"
        color="var(--clr-primary)"
      />
      <MainNavigation current={current} />
    </header>
  );
}
