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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="#osa" className={styles.osaBtn}>OSA</a>
      </div>
    </section>
  );
};

export default Hero;
