import styles from "../../assets/styles/Home.module.css";
import Hero from "../../components/hero/index";

import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <header className={styles.header} id="home">
      <div className={styles.left}>
        <Hero />
      </div>
      <div className={styles.right}>
        <Spline scene="https://prod.spline.design/SAn0pVh5Fu0vUuox/scene.splinecode" />
      </div>
    </header>
  );
}

export default Home;
