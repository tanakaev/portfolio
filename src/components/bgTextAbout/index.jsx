import React, { useEffect, useRef } from "react";
import styles from "../../assets/styles/BigTextAbout.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation, Trans } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

function animateChildren(ref) {
  const children = ref.current.children;
  gsap.set(children, {
    opacity: 0,
    y: 50,
  });
  gsap.fromTo(
    children,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "Sine.easeOut",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
    }
  );
}

const BigTextAbout = () => {
  const { i18nKey } = useTranslation();

  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const capabilitiesRef = useRef(null);

  useEffect(() => {
    animateChildren(aboutRef);
    animateChildren(visionRef);
    animateChildren(capabilitiesRef);
  }, []);

  return (
    <>
      <div className={styles.about_me} ref={aboutRef}>
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

      <div className={styles.vision} ref={visionRef}>
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
      <div className={styles.capabilities} ref={capabilitiesRef}>
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

export default BigTextAbout;
