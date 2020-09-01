import styles from './Label.module.css'

function Running({ id, type }) {
  return (
    <>
      Running: { id + 1  + ' '}
      <span className="capitalize">
        {type}
      </span>
    </>
  )
}

export function Label({ phase }) {
  return (
    <h1 className={styles.Label}>
      {
        phase
          ? <Running {...phase} />
          : 'Stopped'
      }
    </h1>
  );
};
