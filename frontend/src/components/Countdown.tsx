import { useEffect, useState } from 'react';
import styles from '../css/Countdown.module.css';

const WEDDING_DATE = new Date('2027-07-24T00:00:00+02:00');

const getTimeLeft = () => {
  const diff = WEDDING_DATE.getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
      {([
        ['days', 'dagar'],
        ['hours', 'timmar'],
        ['minutes', 'minuter'],
        ['seconds', 'sekunder'],
      ] as const).map(([key, label]) => (
        <div key={key} className={styles.unit}>
          <span className={styles.number}>{timeLeft[key]}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
