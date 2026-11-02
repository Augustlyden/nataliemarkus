import Rings from '../assets/rings.svg?react';
import Toast from '../assets/toast.svg?react';
import Menu from '../assets/menu.svg?react';
import Cake from '../assets/cake.svg?react';
import CoupleDancing from '../assets/couple-dancing.svg?react';
import DiscoBall from '../assets/disco-ball.svg?react';
import styles from '../css/Program.module.css';

const events = [
  { time: '14:00', title: 'Cermoni', Icon: Rings },
  { time: '16:00', title: 'Mingel', Icon: Toast },
  { time: '18:00', title: 'Middag', Icon: Menu },
  { time: '20:00', title: 'Tårtskärning', Icon: Cake },
  { time: '21:00', title: 'Första dansen', Icon: CoupleDancing },
  { time: '21:30', title: 'Fest', Icon: DiscoBall }
  ];

export const Program = () => {
  return (
    <section className={styles.program}>
      <ol className={styles.events}>
        {events.map(({ time, title, Icon }) => (
          <li key={title} className={styles.event}>
            <Icon className={styles.eventIcon} aria-hidden="true" />
            <span className={styles.eventTid}>{time}</span>
            <span className={styles.eventNamn}>{title}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};