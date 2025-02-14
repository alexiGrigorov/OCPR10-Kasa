import Icon from "../components/Icon";
import Logo from "../assets/svgs/logo.svg?react";

export default function Footer() {
  return (
    <footer className="bg-black full-width">
      <Icon
        svg={<Logo />}
        width="var(--space-3xl)"
        color="var(--clr-neutral-100)"
      />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
