import Link from 'next/link';
import { BackButton } from '../components/BackButton';
import styles from '../styles/Programs.module.css';

export default function Programs() {

  return (
    <div className='Programs'>
      <h1 className={styles.title}>Programs</h1>
      <BackButton />
    </div>
  );
}
