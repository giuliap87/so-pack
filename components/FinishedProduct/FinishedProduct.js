import styles from "./FinishedProduct.module.scss";
import Heading from "../Heading/Heading";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {primaryColor} from "../../src/variables";
import {motion} from "framer-motion";

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

function FinishProduct() {
  return (
    <section className={styles.finishedProductSection}>
      <motion.div className={styles.container} variants={container} initial="hidden" animate="show">
        <Heading color={primaryColor}>Full service projects</Heading>
        <motion.p className={styles.description} variants={item}>
          We manage the entire manufactoring process, from design and packaging
          conception to the filling and delivery. Thanks to our filling factory
          in the east of France, which is specialized in luxury perfumery, we can
          control and guarantee the quality of our products even during the last
          phase of manufactoring process. <span> Here is what we do:</span>
        </motion.p>
        <a href="#process" className={styles.scrollDown}>
          <KeyboardArrowDownIcon />
        </a>
      </motion.div>
    </section>
  );
}

export default FinishProduct;
