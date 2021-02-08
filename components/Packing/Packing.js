import styles from "./Packing.module.scss";
import Card from "../Card/Card";
import Overlay from "./Overlay";
import { packagingComponentsInfo } from "../../info/info";
import { useState } from "react";

function Packing({ toggleOverlay, closeOverlay, isOverlay }) {
  const [cardId, setCardId] = useState(0);
  function setOverlay(e) {
    setCardId(e.target.id);
    toggleOverlay();
  }
  function close() {
    closeOverlay();
  }
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
            setOverlay={setOverlay}
          />
        ))}
      </div>
      {isOverlay && (
        <Overlay
          close={close}
          description={packagingComponentsInfo[cardId].description}
          images={packagingComponentsInfo[cardId].images}
        />
      )}
    </div>
  );
}

export default Packing;
