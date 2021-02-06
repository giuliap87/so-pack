import styles from "./Home.module.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { motion } from "framer-motion";
import { Loop } from "@material-ui/icons";

function HomePageSection() {
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <section className={styles.homeSection}>
      <h1 className={styles.logo}>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <img src={"/images/logo.svg"} />{" "}
        </motion.div>
      </h1>
      <motion.a href="#about" className={styles.scrollDown}>
        <KeyboardArrowDownIcon />
      </motion.a>
    </section>
  );
}

export default HomePageSection;
