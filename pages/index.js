import Link from 'next/link'
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [ session, loading ] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div>Loading: {String(loading)}</div>

        <>
        {session && <p>Signed in as {session.user.email}</p>}
        {!session && <p><a href="/api/auth/signin">Sign in</a></p>}
        </>

        <div className={styles.grid}>
          <Link href="/exercise">
            <a className={styles.card}>
              <h3>Exercise &rarr;</h3>
              <p>Begin to exercise right now!</p>
            </a>
          </Link>

          <Link href="/programs">
            <a className={styles.card}>
              <h3>Programs &rarr;</h3>
              <p>Edit your programs</p>
            </a>
          </Link>

          <Link href="/help">
            <a className={styles.card}>
              <h3>Help &rarr;</h3>
              <p>Need some help?</p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h3>About &rarr;</h3>
              <p>What is breath next?</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright © 2020 by Alex Kolov
      </footer>
    </div>
  )
}
