import styles from "./Heading.module.scss";
import {motion} from "framer-motion"

function Heading({ children, color }) {
  return (
    <motion.div initial={{translateX: -40, opacity: 0}} animate={{translateX: 0, opacity:1, transition: { duration: .4, delay: .1}}}>
      <h1 className={styles.heading} style={{color: color}}>{children}</h1>
      <div className={styles.border} style={{backgroundColor: color}}></div>
    </motion.div>
  );
}

export default Heading;
