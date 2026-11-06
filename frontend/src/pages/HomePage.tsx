import Header from "../components/Header";
import Countdown from "../components/Countdown";
import styles from "../css/HomePage.module.css";
/* import VersionSwitcher from "../components/VersionSwitcher"; */
import Hero from "../components/Hero";
import Flowers from "../components/Flowers";
import { Program } from "../components/Program";
import { Palettes } from "../components/Palettes";

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

      <section className={styles.plats} id="plats">
        <Flowers className={`${styles.flower} ${styles.flowerTop}`}/>
        <Flowers className={`${styles.flower} ${styles.flowerBottom}`} />

        <div className={styles.platsContainer}>
          <img className={styles.platsImage} src={plats} alt="Ängby Slott" />

          <div className={styles.platsText}>
            <h2 className={styles.platsEyebrow}>Plats</h2>

            <article className={styles.event}>
              <h3>Vigsel</h3>
              <p className={styles.place}>Bromma Kyrka</p>
              <dl>
                <dt>Adress</dt><dd>Gliavägen 100</dd>
                <dt>Tid</dt><dd>15:00</dd>
                <dt>Hit tar du dig</dt><dd>Busslinje 117 till busshållsplats Bromma Kyrka</dd>
              </dl>
            </article>

            <div className={styles.divider} />

            <article className={styles.event}>
              <h3>Mottagning</h3>
              <p className={styles.place}>Ängby Slott</p>
              <dl>
                <dt>Adress</dt><dd>Stora Ängby Allé 32-34</dd>
                <dt>Tid</dt><dd>16:00</dd>
                <dt>Hit tar du dig</dt><dd>Busslinje 113 till busshållsplats Runstensplan</dd>
              </dl>
            </article>
          </div>
        </div>
        <Flowers className={`${styles.flower} ${styles.flowerTopLeft}`}/>
        <Flowers className={`${styles.flower} ${styles.flowerBottomLeft}`} />
      </section>

      <Program />

      <section className={styles.colors} aria-labelledby="colors-title">
        <div className={styles.colorsInner}>
          <p className={styles.colorsEyebrow}>Klädkod</p>
          <h2 id="colors-title" className={styles.colorsTitle}>Våra färger</h2>
          <div className={styles.colorsDivider} aria-hidden="true" />
          <p className={styles.colorsText}>
            Vi ser gärna att ni bär någon av dessa färger på vår stora dag.
            Temat är somrig elegans. Kvinnor får gärna bära långklänning eller långkjol och män får gärna bära svart kostym. Vi vill att ni ska känna er bekväma och fina!
          </p>

          <div className={styles.colorsCard}>
            <Palettes />
          </div>
        </div>
      </section>

      {/* <section className={styles.program} id="detaljer">
        <ul className="timeline">
          {events.map(e => (
            <li key={e.title} className="event">
              <Icon />
              <p className="event-time">{e.time}</p>
              <h3 className="event-title">{e.title}</h3>
            </li>
          ))}
        </ul>
      </section> */}
      {/* <VersionSwitcher /> */}
    </>
  );
};

export default HomePage;
