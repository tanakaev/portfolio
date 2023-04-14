import React from "react";
import styles from "../../../assets/styles/LoadingModal.module.css";
import { useTranslation, Trans } from "react-i18next";
import loading from "../../../assets/images/loading/loading.svg";

function LoadingModal() {
  const { i18nKey } = useTranslation();

  return (
    <div className={styles.loading_modal}>
      <div className={styles.loading}>
        <img src={loading} alt="loading..." />
      </div>
      <Trans i18nKey="loading">
        <p>Language changing. Please wait...</p>
        <p>Please wait...</p>
      </Trans>
    </div>
  );
}

export default LoadingModal;
