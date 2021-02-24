import styles from "./Packing.module.scss";
import Card from "../Card/FlippingCard";
import { packagingComponentsInfo } from "../../info/info";

function Packing() {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {packagingComponentsInfo.map((card) => (
          <Card
            className={styles.card}
            key={card.service}
            id={card.id}
            title={card.service}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Packing;
