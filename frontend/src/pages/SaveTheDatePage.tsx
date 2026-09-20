import Countdown from '../components/Countdown';
import FlowerDecoration from '../components/FlowerDecoration';
import styles from '../css/SaveTheDate.module.css';

const SaveTheDatePage = () => {
  return (
    <main className={styles.background}>
      <div className={styles.card}>

        <FlowerDecoration  className={`${styles.flowerDecoration} ${styles.topLeft}`}/>
        <FlowerDecoration  className={`${styles.flowerDecoration} ${styles.topRight}`}/>
  
        <p className={styles.title}>save the date</p>

        <h1 className={styles.names}>Natalie &amp; Markus</h1>

        <p className={styles.text}>Bröllop</p>

        <span className={styles.divider}></span>

        <p className={styles.date}>24 juli 2027</p>

        <p className={styles.location}>Bromma Kyrka <br /> Ängby Slott Bromma</p>

        <p className={styles.info}>Mer information kommer snart!</p>
        <Countdown />

        <FlowerDecoration  className={`${styles.flowerDecoration} ${styles.bottomLeft}`}/>
        <FlowerDecoration  className={`${styles.flowerDecoration} ${styles.bottomRight}`}/>
        
      </div>
    </main>
  );
};

export default SaveTheDatePage;
