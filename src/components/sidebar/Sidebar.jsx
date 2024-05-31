import React, { useState } from "react";
import whiteLogo from "../../assets/Logo/whiteLogo.png";
import blackLogo from "../../assets/Logo/blackLogo.png";
import "./Sidebar.css";

import {
  RiBook2Line,
  RiBriefcase2Line,
  RiChat3Line,
  RiHome2Line,
  RiMenu2Line,
  RiMoonLine,
  RiStackLine,
  RiSunLine,
  RiUser3Line,
} from "react-icons/ri";

const Sidebar = (props) => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img
            src={props.theme === "light" ? whiteLogo : blackLogo}
            alt="logo"
          />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <RiHome2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <RiUser3Line />
                </a>
              </li>

              {/* <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <RiFileList3Line />
                                </a>
                            </li> */}

              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  <RiBriefcase2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <RiBook2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <RiStackLine />
                </a>
              </li>

              {/* <li className="nav__item">
                                <a href="#blog" className="nav__link">
                                    <RiDraftLine />
                                </a>
                            </li> */}

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <RiChat3Line />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <button
            onClick={() => {
              props.switchTheme();
              showMenu(!toggle);
            }}
            className="nav__link footer__button"
          >
            {props.theme === "light" ? <RiMoonLine /> : <RiSunLine />}
          </button>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <RiMenu2Line />
      </div>
    </>
  );
};

export default Sidebar;
