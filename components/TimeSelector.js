import styles from './TimeSelector.module.css';

export const TimeSelector = ({ seconds, onChange }) => {
  return (
    <div className={styles.TimeSelector}>
      <div className={styles.Value}>
        <input value={seconds / 60} readOnly />
      </div>

      <input
        value={seconds}
        onChange={() => onChange(event.target.value)}
        min="30"
        max="3600"
        step="30"
        type="range"
        className={styles.RangeSelector}
      />
    </div>
  )
};
