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

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

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
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
