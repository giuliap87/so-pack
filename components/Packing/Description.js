import styles from "./Description.module.scss";
import Heading from "../Heading/Heading";
import { primaryColor } from "../../src/variables";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Description({ isOverlay }) {
  return (
    <div
      className={styles.container}
      style={isOverlay ? { filter: "blur(5px)" } : {}}
    >
      <motion.div className={styles.text} variants={container} initial="hidden" animate="show">
        <Heading color={primaryColor}>Packaging Components</Heading>
        <motion.p className={styles.description} variants={item}>
          Thanks to our industry partners for glass, metal working, polymers
          injection and mold development, we can manage the develoment of one of
          several components for perfumery and cosmetic.
          <span> You can choose from:</span>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Description;
