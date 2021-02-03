import styles from "./Packing.module.scss";
import Card from "../Card/Card";
import Overlay from "./Overlay";

import { useState } from "react";

const details = [
  {
    id: 1,
    title: "Consulting",
    description:
      "We offer professional consultations and manage the development of one of several components of perfumery of cosmetic.",
    images: {
      img1: "/images/1.png",
      img2: "/images/2.png",
    },
  },
  {
    id: 2,
    title: "Bottle",
    description:
      "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    images: {
      img1: "/images/3.png",
      img2: "/images/4.png",
    },
  },
  {
    id: 3,
    title: "Caps",
    description:
      "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    images: {
      img1: "/images/5.png",
      img2: "/images/1.png",
    },
  },
  {
    id: 4,
    title: "Packaging",
    description:
      "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    images: {
      img1: "/images/3.png",
      img2: "/images/2.png",
    },
  },
];

function Packing({ toggleOverlay, closeOverlay, isOverlay }) {
  function setOverlay() {
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
        {details.map((card) => (
          <Card
            className={styles.card}
            key={card.title}
            id={card.id}
            title={card.title}
            setOverlay={setOverlay}
          />
        ))}
      </div>
      {isOverlay && (
        <Overlay close={close} description={details[0].description} />
      )}
    </div>
  );
}

export default Packing;
