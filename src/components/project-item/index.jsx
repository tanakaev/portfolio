import React, { useState, useCallback, useMemo } from "react";
import styles from "../../assets/styles/ProjectItem.module.css";

import { useTranslation } from "react-i18next";

const ProjectItem = ({ name, type, date, image, link }) => {
  const { t } = useTranslation();

  const [isShown, setIsShown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleOnEnter = useCallback((e) => {
    setIsShown(true);
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  }, []);

  const handleOnMove = useCallback(
    (e) => {
      if (isShown) {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - left, y: e.clientY - top });
      }
    },
    [isShown]
  );

  const handleOnLeave = useCallback(() => {
    setIsShown(false);
  }, []);

  const cursorStyle = useMemo(
    () => ({
      left: `${mousePosition.x}px`,
      top: `${mousePosition.y}px`,
      transform: "translate(-50%, -50%)",
    }),
    [mousePosition]
  );

  return (
    <div
      className={styles.project}
      onMouseEnter={handleOnEnter}
      onMouseLeave={handleOnLeave}
      onMouseMove={handleOnMove}
    >
      <h3 className={styles.name}>{t(`projectsData.${name}`)}</h3>
      <div className={styles.right_options}>
        <p
          className={styles.type}
          onMouseEnter={() => setIsShown(false)}
          onMouseLeave={() => setIsShown(true)}
        >
          <a href={link}>{type}</a>
        </p>
        <p className={styles.separator}>|</p>
        <p className={styles.date}>{date}</p>
      </div>
      {isShown && (
        <div className={styles.cursor} style={cursorStyle}>
          <div className={styles.overlay}>
            <img src={image} alt={name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
