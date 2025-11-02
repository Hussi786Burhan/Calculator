import styles from "./Display.module.css";

function Display({ displayvalue }) {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayvalue}
      readOnly
    />
  );
}

export default Display;
