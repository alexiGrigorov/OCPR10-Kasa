import { Link } from "react-router-dom";

import SvgIcon from "../components/SvgIcon";

import Logo from "../assets/svgs/logo.svg?react";

function MainLogo() {
  return (
    <Link to={"/"}>
      <SvgIcon
        svg={<Logo />}
        color="var(--clr-primary)"
        className="main-logo"
      />
    </Link>
  );
}

export default MainLogo;
