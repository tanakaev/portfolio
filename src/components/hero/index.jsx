import styles from "../../assets/styles/Hero.module.css";
import Button from "../ui/button/index";
import { useTranslation, Trans } from "react-i18next";

function Hero() {
  const { t, i18nKey } = useTranslation();
  const btn_talk = t("btn_talk.title");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    const contactSectionPosition = contactSection.offsetTop;
    window.scrollTo({
      top: contactSectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h2 className={styles.name}>
        Deni <span>Tanakaev</span>.
      </h2>
      <div className={styles.features}>
        <div className={styles.works}>
          <div className={styles.dot}></div>
          <h3>Front-end developer</h3>
        </div>
        <div className={styles.works}>
          <div className={styles.dot}></div>
          <h3>UX designer</h3>
        </div>
        <div className={styles.works}>
          <div className={styles.dot}></div>
          <h3>Copywriter</h3>
        </div>
      </div>
      <h1 className={styles.description}>
        <Trans i18nKey="description">
          <span>I am a freelance creator specializing in front-end</span>
          <span>development, copywriting, and web design.</span>
          <span>Let me elevate your brand to new heights.</span>
        </Trans>
      </h1>

      <Button type="submit" title={btn_talk} onClick={handleSubmit} />
    </>
  );
}

export default Hero;
