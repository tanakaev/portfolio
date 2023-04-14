import React from "react";
import styles from "../../assets/styles/SmallTextAbout.module.css";
import { useTranslation, Trans } from "react-i18next";

const SmallTextAbout = () => {
  const { i18nKey } = useTranslation();

  return (
    <>
      <div className={styles.about_me}>
        <Trans i18nKey="about">
          <h4>Who am I ?</h4>
          <p>As a freelance web developer and designer,</p>
          <p>I specialize in enhancing your brand's online</p>
          <p>presence by researching and implementing</p>
          <p>effective website solutions. Your website</p>
          <p>is the most important online representation</p>
          <p>of your company, and I focus oncreating custom</p>
          <p>designs that not only capture attention,</p>
          <p>but also improve the user experience.</p>
        </Trans>
      </div>
      <div className={styles.vision}>
        <Trans i18nKey="vision">
          <h4>Vision & technology</h4>
          <p>My vision is to combine your ideas with</p>
          <p>cutting-edge technologies. From responsive</p>
          <p>design to optimized functionality, I will create a</p>
          <p>tailored design that meets your unique needs.</p>
          <p>If you're looking for a front-end developer who can`</p>
          <p>bring your vision to life using the latest</p>
          <p>technologies, you've come to the right place.</p>
        </Trans>
      </div>
      <div className={styles.capabilities}>
        <Trans i18nKey="capabilities">
          <h4>Capabilities</h4>
          <div className={styles.skills}>
            <div className={styles.dot}></div>
            <p>Front-end development</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.dot}></div>
            <p>Web Design</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.dot}></div>
            <p>Responsive design</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.dot}></div>
            <p>Website performance</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.dot}></div>
            <p>Accessibility</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.dot}></div>
            <p>SEO</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.dot}></div>
            <p>Copywriting</p>
          </div>
        </Trans>
      </div>
    </>
  );
};

export default SmallTextAbout;
