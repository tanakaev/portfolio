import React from "react";
import styles from "../../../assets/styles/MenuModal.module.css";
import contactImg from "../../../assets/images/contact/contact1.png";
import { useTranslation, Trans } from "react-i18next";
import { Link, scroller } from "react-scroll";

function MenuModal({ isOpen, toggleModal }) {
  const { i18nKey } = useTranslation();

  function handleClose() {
    toggleModal(false);
  }

  function getOffset(clampMin, clampMax) {
    const vw = window.innerWidth * 0.01;
    const offset = Math.max(Math.min(clampMax, 8 * vw), clampMin);
    return -1 * offset;
  }

  function scrollToSection(sectionId) {
    toggleModal(false);

    const options = {
      behavior: "smooth",
      block: "start",
      duration: 600,
      smooth: "easeInOutQuint",
      spy: true,
      offset: getOffset(90, 160),
    };

    scroller.scrollTo(sectionId, options);
  }

  return (
    <>
      <div
        className={
          isOpen
            ? `${styles.modal} ${styles.open}`
            : `${styles.modal} ${styles.close}`
        }
        onClick={handleClose}
      >
        <div className={styles.content}>
          <div className={styles.picture}>
            <img src={contactImg} alt="contact image" />
          </div>
          <div className={styles.nav}>
            <Trans i18nKey="menu">
              <p>Menu</p>
              <ul>
                <li>
                  <Link to="home" onClick={() => scrollToSection("home")}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" onClick={() => scrollToSection("about")}>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    onClick={() => scrollToSection("projects")}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="contact" onClick={() => scrollToSection("contact")}>
                    Contact
                  </Link>
                </li>
              </ul>
            </Trans>
          </div>
        </div>
        <div className={styles.empty}></div>
      </div>
    </>
  );
}

export default MenuModal;
