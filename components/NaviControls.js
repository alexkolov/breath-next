import { signOut, useSession } from 'next-auth/client'
import styles from './NaviControls.module.css';

function Icon() {
  return (
    <svg
      className={styles.LogoutButton}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}

export function NaviControls({ name }) {
  const [ session ] = useSession();

  return (
    <div className={styles.NaviControls}>
      {
        session && <>
          <span>{name}</span>
          <a
            href={'/api/auth/signout'}
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <Icon />
          </a>
        </>
      }
    </div>
  );
}