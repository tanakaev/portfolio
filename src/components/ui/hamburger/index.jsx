import styles from "../../../assets/styles/Hamburger.module.css";
import React from "react";
import PropTypes from "prop-types";

function Hamburger({ onToggleModal, isOpen }) {
  const handleBurgerAnim = () => {
    onToggleModal(!isOpen);
  };
  return (
    <>
      <svg
        onClick={handleBurgerAnim}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 147.33 147.33"
        className={styles.circles}
        width={47}
        height={47}
      >
        <path
          className={
            isOpen
              ? `${styles.circle} ${styles.circleOutter}`
              : `${styles.circle}`
          }
          d="M80,150.67A70.67,70.67,0,0,0,80,9.33"
          transform="translate(-6.33 -6.33)"
        />
        <path
          className={styles.circle}
          d="M80,9.33a70.67,70.67,0,0,0,0,141.34"
          transform="translate(-6.33 -6.33)"
        />
        <path
          className={styles.circle}
          d="M80,127.38a47.38,47.38,0,0,0,0-94.76"
          transform="translate(-6.33 -6.33)"
        />
        <path
          className={
            isOpen
              ? `${styles.circle} ${styles.circleMiddle}`
              : `${styles.circle}`
          }
          d="M80,32.62a47.38,47.38,0,0,0,0,94.76"
          transform="translate(-6.33 -6.33)"
        />
        <path
          className={
            isOpen
              ? `${styles.circle} ${styles.circleInner}`
              : `${styles.circle}`
          }
          d="M80,102.17a22.17,22.17,0,0,0,0-44.34"
          transform="translate(-6.33 -6.33)"
        />
        <path
          className={styles.circle}
          d="M80,57.83a22.17,22.17,0,0,0,0,44.34"
          transform="translate(-6.33 -6.33)"
        />
      </svg>
    </>
  );
}

Hamburger.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
