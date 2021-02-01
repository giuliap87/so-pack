import Heading from "../Heading/Heading";
import styles from "./Packing.module.css";
import Card from "../Card/Card";

const details = [
  {
    id: 1,
    title: "Consulting",
    description:
      "We offer professional consultations and manage the development of one of several components of perfumery of cosmetic.",
    path: "/services/packaging/consulting",
  },
  {
    id: 2,
    title: "Bottle",
    description: "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    path: "/services/packaging/bottle",
  },
  {
    id: 3,
    title: "Caps",
    description: "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    path: "/services/packaging/caps",
  },
  {
    id: 4,
    title: "Packaging",
    description: "According to client's need and its market, we can customize our European standard bottles or develop a specific mold for your project.",
    path: "/services/packaging/packaging-options",
  },
];

function Packing() {
  return (
    <section className={styles.sectionPacking}>
      <div className={styles.container}>
        <Heading color="rgb(207, 3, 3)">Packaging Components</Heading>
        <p className={styles.description}>
          Thanks to our industry partners for glass, metal working, polymers
          injection and mold development, we can manage the develoment of one of
          several components for perfumery and cosmetic.
          <span className={styles.textSpan}> You can choose from:</span>
          <div></div>
          <div className={styles.cardsContainer}>
           {details.map(card => <Card className={styles.card} key={card.title} id={card.id} title={card.title} description={card.description} path={card.path}/>)}
          </div>
        </p>
      </div>
    </section>
  );
}

export default Packing;
