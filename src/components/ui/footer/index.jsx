import React from "react";
import styles from "../../../assets/styles/Footer.module.css";
import ProgressBar from "../progress-bar";
import Icon from "react-icons-kit";
import { socialFacebook } from "react-icons-kit/metrize/socialFacebook";
import { socialSharethis } from "react-icons-kit/metrize/socialSharethis";
import { socialBehance } from "react-icons-kit/metrize/socialBehance";

function Footer({ handleShareToggle }) {
  return (
    <footer className={styles.footer}>
      <ProgressBar />
      <div>
        <div className={styles.socials_row}>
          <div className={styles.social}>
            <a href="https://www.facebook.com/tanakaev" target="_blank">
              <Icon icon={socialFacebook} size={32} />
            </a>
          </div>
          <div className={styles.social}>
            <a href="https://www.behance.net/tanakaev" target="_blank">
              <Icon icon={socialBehance} size={32} />
            </a>
          </div>
          <div className={styles.social} onClick={handleShareToggle}>
            <Icon icon={socialSharethis} size={32} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
