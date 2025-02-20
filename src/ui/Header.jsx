import MainLogo from "./MainLogo";
import MainNavigation from "./MainNavigation";

function Header() {
  return (
    <header className="max-w-screen m-auto m-bs-header m-be-header p-i-header d-flex flex-space-between flex-align-center">
      <MainLogo />
      <MainNavigation />
    </header>
  );
}

export default Header;
