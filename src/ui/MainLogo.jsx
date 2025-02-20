import SvgIcon from "../components/SvgIcon";

import Logo from "../assets/svgs/logo.svg?react";

function MainLogo() {
  return (
    <SvgIcon svg={<Logo />} color="var(--clr-primary)" className="main-logo" />
  );
}

export default MainLogo;
