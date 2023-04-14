import styles from "../../../assets/styles/ProgressBar.module.css";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollPercentage = (
        scrollPosition /
        (documentHeight - windowHeight)
      ).toFixed(2);
      setScaleX(scrollPercentage);
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className={styles.progress_bar}>
      <div className={styles.outter_bar}>
        <div
          className={styles.inner_bar}
          style={{ transform: `scaleX(${scaleX})` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
