import Header from "../components/Header";
import Countdown from "../components/Countdown";
import styles from "../css/HomePage.module.css";
import VersionSwitcher from "../components/VersionSwitcher";
import Hero from "../components/Hero";

type Props = {
  hero: string;
  plats: string;
}

const HomePage = ({ hero, plats }: Props) => {
  return (
    <>
      <Header />
      <section className={styles.hero} id="top">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Vi gifter oss</p>
          <h1>NATALIE <br /><span className={styles.span}>och</span><br /> MARKUS</h1>
          <span className={styles.heroDivider} />
          <p className={styles.heroDate}>24 juni 2027</p>
          <div className={styles.countdown}>
            <Countdown />
          </div>
        </div>
      </section>
      <Hero image={hero}/>

      <section className={styles.platsContainer} id="plats">
        <img className={styles.platsImage} src={plats} />
        <div className={styles.platsText}>
          <h2 className={styles.platsEyebrow}>Plats</h2>
          <div className={styles.platsInfo}>
            <div className={styles.divider}></div>
            <div className={styles.li}>
              <p>Vigsel</p>
              <li>
                <ul>Bromma Kyrka</ul>
                <ul>Adress Gliavägen 100</ul>
                <ul>Tid 15:00</ul>
                <ul>Kommunikation busslinje 117 till busshållsplats Bromma Kyrka</ul>
              </li>
            </div>
            <div className={styles.li}>
              <p>Mottagning</p>
              <li>
                <ul>Ängby Slott</ul>
                <ul>Adress Stora Ängby Allé 32-34</ul>
                <ul>Tid 16:00</ul>
                <ul>Kommunikation busslinje 113 till busshållsplats Runstensplan</ul>
              </li>
            </div>
          </div>
        </div>
      </section>
      <VersionSwitcher />
    </>
  );
};

export default HomePage;
