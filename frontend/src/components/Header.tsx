import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.logo}>N & M</a>
      <nav>
        <a href="#plats">Plats</a>
        <a href="#program">Program</a>
        <a href="#osa" className={styles.osaBtn}>OSA</a>
      </nav>
    </header>
  );
};

export default Header;
