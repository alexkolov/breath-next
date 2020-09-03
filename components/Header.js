import { NaviControls } from './NaviControls';
import styles from './Header.module.css';

export function Header({ name }) {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        breath {' '}
        <span className="font-light">
          next
        </span>
      </div>
      <NaviControls name={name} />
    </header>
  );
}
