import React from "react";
import styles from "../../../assets/styles/ShareModal.module.css";
import Icon from "react-icons-kit";
import { whatsapp } from "react-icons-kit/icomoon/whatsapp";
import { telegram } from "react-icons-kit/icomoon/telegram";
import { mail4 } from "react-icons-kit/icomoon/mail4";

function ShareModal({ isShareOpen }) {
  return (
    <>
      <div className={styles.share_modal}>
        <div className={styles.modal_content}>
          <div className={styles.social_container}>
            <a
              href="https://wa.me/+491623201325?text=Hi!%20I%20have%20a%20few%20questions"
              target="blank_"
              className={
                isShareOpen
                  ? `${styles.social_icon} ${styles.activeWS}`
                  : `${styles.social_icon}`
              }
            >
              <Icon icon={whatsapp} size={40} />
            </a>
          </div>
          <div className={styles.social_container}>
            <a
              href="https://t.me/tanakaev"
              target="blank_"
              className={
                isShareOpen
                  ? `${styles.social_icon} ${styles.activeTM}`
                  : `${styles.social_icon}`
              }
            >
              <Icon icon={telegram} size={40} />
            </a>
          </div>
          <div className={styles.social_container}>
            <a
              href="mailto:danieljarzynski94@gmail.com?subject=Question%20or%20Request&body=Hi%20Deni.%20I'm%20interested%20in%20..."
              target="blank_"
              className={
                isShareOpen
                  ? `${styles.social_icon} ${styles.activeML}`
                  : `${styles.social_icon}`
              }
            >
              <Icon icon={mail4} size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareModal;
