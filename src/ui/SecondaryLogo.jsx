import SvgIcon from "../components/SvgIcon";

import Logo from "../assets/svgs/logo.svg?react";

function SecondaryLogo() {
  return (
    <SvgIcon
      svg={<Logo />}
      color="var(--clr-neutral-100)"
      className="secondary-logo"
    />
  );
}

export default SecondaryLogo;
