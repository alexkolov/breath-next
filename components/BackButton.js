import Link from 'next/link'
import styles from './BackButton.module.css'

export function BackButton() {
  return (
    <Link href="/">
      <a className={styles.link}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </a>
    </Link>
  );
}
