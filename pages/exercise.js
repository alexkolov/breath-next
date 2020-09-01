import Link from 'next/link';
import { BackButton } from '../components/BackButton';
import styles from '../styles/Exercise.module.css';

export default function Exercise() {

  return (
    <div className='Exercise'>
      <h1>Exercise</h1>
      <BackButton />
    </div>
  );
}
