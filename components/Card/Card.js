import styles from "./Card.module.css";
import Button from "@material-ui/core/Button";
import Link from "next/link";

function MyCard({ id, title, showOverlay }) {
  return (
    <div
      onClick={showOverlay}
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/images/${id}.png)`,
      }}
    >
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default MyCard;
