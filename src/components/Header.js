import logo from "../blocks/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo header__logo" alt="Логотип" />
    </header>
  );
}

export default Header;
