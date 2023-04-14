import React, { useEffect, useRef } from "react";
import styles from "../../assets/styles/About.module.css";
import SmallTextAbout from "../../components/smTextAbout";
import BigTextAbout from "../../components/bgTextAbout";
import Lens from "../../components/lens";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const smallRef = useRef(null);
  const lensRef = useRef(null);
  const bgRef = useRef(null);
  const aboutRef = useRef(null);
  const smRef = useRef(null);

  useEffect(() => {
    gsap.to(lensRef.current, {
      yPercent: 270,
      ease: "none",
      duration: 0.05,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        ToggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <section className={styles.about} ref={aboutRef} id="about">
      <div className={styles.container} ref={containerRef}>
        <div className={styles.sm} ref={smRef}>
          <div className={styles.smallText} ref={smallRef}>
            <SmallTextAbout />
          </div>
          <div className={styles.lens} ref={lensRef}>
            <Lens />
          </div>
        </div>
        <div className={styles.bg} ref={bgRef}>
          <BigTextAbout />
        </div>
      </div>
    </section>
  );
}

export default About;
