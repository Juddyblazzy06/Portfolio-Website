import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import "./styles.scss";
const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Works",
    to: "/works",
  },
  {
    label: "About Me",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      {/* ✅ Backdrop overlay for mobile menu */}
      {toggleIcon && <div className="navbar-backdrop" onClick={() => setToggleIcon(false)} />}
      
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={() => setToggleIcon(false)} // ✅ Close menu on link click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar__container__actions">
          <ThemeToggle />
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
