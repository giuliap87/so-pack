import styles from "./Description.module.scss";
import Heading from "../Heading/Heading";
import {primaryColor} from "../../src/variables";


function Description({ isOverlay }) {
  return (
    <div
      className={styles.container}
      style={isOverlay ? { filter: "blur(5px)" } : {}}
    >
      <div className={styles.text}>
        <Heading color={primaryColor}>Packaging Components</Heading>
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