import styles from "./Card.module.css";
import Button from "@material-ui/core/Button";
import Link from "next/link";

function MyCard({ id, title, description, path }) {
  return (
    <div className={styles.container}>
      <img alt="first" className={styles.image} src={`/images/${id}.png`} />
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
