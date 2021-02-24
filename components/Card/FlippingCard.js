import styles from "./FlippingCard.module.scss";

function FlippingCard({ title, id, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div
          className={styles.cardFront}
          style={{
            backgroundImage: `linear-gradient(rgba(277,32,32,.8), rgba(255,255,255,.2)), url(/images/packaging/${title}.jpg)`,
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
