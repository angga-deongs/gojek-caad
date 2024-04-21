// --- link
import { Link } from "react-router-dom";

// --- style
import style from "./style.module.scss";

// --- assets
import gojekLogo from "core/assets/img/logo/gojek.svg";

// --- header
const Header = () => {
  const menuList = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/partner",
      name: "Partner with us",
    },
    {
      to: "/careers",
      name: "Careers",
    },
    {
      to: "/company",
      name: "Company",
    },
    {
      to: "/products",
      name: "Products",
    },
    {
      to: "/blog",
      name: "Blog",
    },
    {
      to: "/help",
      name: "Help",
    },
    {
      to: "/login",
      name: "Login",
    },
    {
      to: "/register",
      name: "Register",
    },
  ];

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.inner}>
          {/* Logo */}
          <Link to="/" className={style.logo}>
            <img src={gojekLogo} alt="gojek" className={style.el} />
          </Link>
          {/* Menu */}
          <ul className={style.menu}>
            {menuList.map((val, idx) => (
              <li className={style.item} key={`hm-${idx}`}>
                <Link to={val.to} className={style.lnk}>
                  {val.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
