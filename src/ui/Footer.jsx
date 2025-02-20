import SecondaryLogo from "./SecondaryLogo";

function Footer() {
  return (
    <footer className="d-flex gap-5 flex-align-center flex-column m-bs-footer p-bs-footer p-be-footer text-neutral-100 bg-neutral-900">
      <SecondaryLogo />
      <p className="font-size-f text-medium text-center text-balance footer-text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
