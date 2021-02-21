import styles from "./Packing.module.scss";
import Card from "../Card/FlippingCard";
import Overlay from "./Overlay";
import { packagingComponentsInfo } from "../../info/info";

function Packing({ toggleOverlay, closeOverlay, isOverlay }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.cardsContainer}
        style={isOverlay ? { filter: "blur(5px)" } : {}}
      >
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
