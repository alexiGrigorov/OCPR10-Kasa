import MainLogo from "./MainLogo";
import MainNavigation from "./MainNavigation";

function Header() {
  return (
    <header className="max-w-screen w-full mi-auto m-bs-header m-be-header p-i-header flex justify-between items-center">
      <MainLogo />
      <MainNavigation />
    </header>
  );
}

export default Header;
