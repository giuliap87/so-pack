import styles from "./Card.module.css";
import Button from "@material-ui/core/Button";
import Link from "next/link";

//background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://i.imgur.com/xnh5x47.jpg");

function MyCard({ id, title, description, path }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/images/${id}.png)`}}
    >
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        <Button
          className={styles.button}
          color="primary"
          variant="contained"
          size="small"
        >
          <Link href={path}> More</Link>
        </Button>
      </div>
    </div>
  );
}

export default MyCard;
