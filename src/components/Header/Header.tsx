import { useState } from "react";
import logo from "../../assets/Letters_edited 1.svg";
import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className={styles.headerCont}>
      <div className={styles.header}>
        <img loading="lazy" src={logo} alt="" className={styles.logo} />
        <div className={styles.navigation}>
          {!isMobile ? (
            <ul className={styles.buttons_list}>
              <li>
                <a className={styles.header_link} href="#about">
                  About
                </a>
              </li>
              <li>
                <a className={styles.header_link} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className={styles.header_link} href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className={styles.header_link} href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          ) : (
            <div className={styles.burgerMenu}>
              <GiHamburgerMenu
                className={styles.iconMenu}
                onClick={toggleMenu}
              />
              {menuOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <a
                      className={styles.header_link}
                      href="#about"
                      onClick={toggleMenu}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.header_link}
                      href="#projects"
                      onClick={toggleMenu}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.header_link}
                      href="#team"
                      onClick={toggleMenu}
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.header_link}
                      href="#contacts"
                      onClick={toggleMenu}
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
