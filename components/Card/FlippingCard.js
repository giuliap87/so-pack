import styles from "./FlippingCard.module.scss";

function FlippingCard({ title, id, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div
          className={styles.cardFront}
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/images/${id}.png)`,
          }}
        >
          <h4 className={styles.cardHeading}>{title}</h4>
          <button>Learn more</button>
        </div>
        <div className={`${styles.cardBack} ${styles.side}`}>
          <div className={styles.backContent}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlippingCard;
