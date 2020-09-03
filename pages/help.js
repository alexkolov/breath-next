import { BackButton } from '../components/BackButton';
import styles from '../styles/Help.module.css';

export default function Help() {

  return (
    <div className='Help'>
      <h1 className={styles.title}>Help</h1>
      <BackButton />
    </div>
  );
}
