import styles from '../css/Hero.module.css';

interface HeroProps {
    image: string;
}

const Hero = ({ image }: HeroProps) => {
  return (
    <section className={styles.welcome} id="valkommen">
      <img
        className={styles.welcomeImage}
        src={image}
        alt="Natalie och Markus"
      />
      <div className={styles.welcomeText}>
        <p className={styles.welcomeEyebrow}>Välkomna</p>
        <h2>Vi ska gifta oss</h2>
        <span className={styles.divider} />
        <p className={styles.text}>
          Med stor glädje och kärlek ser vi fram emot att få dela en av livets allra finaste dagar med er.
          Den 24 juli 2027 säger vi ja till varandra och det skulle betyda så mycket att få fira denna speciella dag tillsammans med våra nära och kära.
          Här har vi samlat all information inför vårt bröllop, så att ni kan se fram emot dagen precis lika mycket som vi gör.
          <br />
          Med kärlek,
          <br />
          Natalie & Markus ♡
        </p>
        <a href="#osa" className={styles.osaBtn}>OSA</a>
      </div>
    </section>
  );
};

export default Hero;
