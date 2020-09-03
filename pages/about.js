import { BackButton } from '../components/BackButton';
import styles from '../styles/About.module.css';

export default function About() {

  return (
    <div className='About'>
      <h1 className={styles.title}>Help</h1>
      <BackButton />
      <p>Here some promo</p>
    </div>
  );
}
