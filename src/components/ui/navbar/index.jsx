import React from "react";
import Hamburger from "../hamburger";
import logo from "../../../assets/images/logo/tanakaev-logo-black.svg";
import styles from "../../../assets/styles/Navbar.module.css";
import LanguageSwitcher from "../language-switcher";

function Navbar({ onToggleModal, modalOpen }) {
  const toggleModal = () => {
    onToggleModal();
  };
  return (
    <nav className={styles.nav}>
      <div>
        <img className={styles.logo} src={logo} alt="tanakaev logo" />
        <LanguageSwitcher />
      </div>
      <div className={styles.menu}>
        <Hamburger onToggleModal={toggleModal} isOpen={modalOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
