import styles from "./Heading.module.scss";

function Heading({ children, color }) {
  return (
    <div>
      <h1 className={styles.heading} style={{color: color}}>{children}</h1>
      <div className={styles.border} style={{backgroundColor: color}}></div>
    </div>
  );
}

export default Heading;
