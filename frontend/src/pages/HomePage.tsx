import Header from "../components/Header";
import Countdown from "../components/Countdown";
import styles from "../css/HomePage.module.css";
import VersionSwitcher from "../components/VersionSwitcher";
import Hero from "../components/Hero";

type Props = {
  hero: string
}

const HomePage = ({ hero }: Props) => {
  return (
    <>
      <Header />
      <section className={styles.hero} id="top">
        {/* <img
          className="hero__img"
          src={image}
          alt="Anna och Bo"
          style={{ objectPosition: focus }}
        /> */}
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Vi gifter oss</p>
          <h1>Natalie & Markus</h1>
          <span className={styles.heroDivider} />
          <p className={styles.heroDate}>24 juni 2027</p>
          <div className={styles.countdown}>
            <Countdown />
          </div>
        </div>
      </section>
      <Hero image={hero}/>
      <VersionSwitcher />
    </>
  );
};

export default HomePage;
