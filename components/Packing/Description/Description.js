import styles from "./Description.module.scss";
import Heading from "../../Heading/Heading";

function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Heading color="rgb(207, 3, 3)">Packaging Components</Heading>
        <p className={styles.description}>
          Thanks to our industry partners for glass, metal working, polymers
          injection and mold development, we can manage the develoment of one of
          several components for perfumery and cosmetic.
          <span> You can choose from:</span>
        </p>
      </div>
    </div>
  );
}

export default Description;
