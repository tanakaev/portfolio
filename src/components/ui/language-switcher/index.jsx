import React, { useState, useEffect } from "react";
import styles from "../../../assets/styles/LanguageSwitcher.module.css";
import { useTranslation } from "react-i18next";
import LoadingModal from "../loading-modal/LoadingModal";

function LanguageSwitcher() {
  const [selectedButton, setSelectedButton] = useState(
    localStorage.getItem(`${styles.selectedButton}`)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { i18n } = useTranslation();

  const lngs = {
    en: { nativeName: "ENG" },
    de: { nativeName: "DE" },
  };

  const handleButtonClick = async (lng) => {
    setIsLoading(true);
    setTimeout(async () => {
      await i18n.changeLanguage(lng);
      setSelectedButton(lng);
      localStorage.setItem(`${styles.selectedButton}`, lng);
      setIsLoading(false);
      setIsModalOpen(true);
    }, 600);
  };

  useEffect(() => {
    const currentLanguage = i18n.language;
    if (selectedButton !== currentLanguage) {
      setSelectedButton(currentLanguage);
      localStorage.setItem(`${styles.selectedButton}`, currentLanguage);
    }
  }, [i18n.language]);

  return (
    <div className={`${styles.languages}`}>
      {Object.keys(lngs).map((lng, index) => (
        <React.Fragment key={lng}>
          {index !== 0 && <p className={styles.separator}>/</p>}
          <button
            type="submit"
            onClick={() => handleButtonClick(lng)}
            disabled={i18n.resolvedLanguage === lng}
            className={`${styles.switcher} ${
              selectedButton === lng ? `${styles.selectedButton}` : ""
            }`}
          >
            {lngs[lng].nativeName}
          </button>
        </React.Fragment>
      ))}
      {isLoading && <LoadingModal isOpen={isModalOpen} />}
    </div>
  );
}

export default LanguageSwitcher;
