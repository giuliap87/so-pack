import styles from "./Card.module.scss";
import { motion } from "framer-motion";

const moveUp = {
  translateY: -10,
  transition: {
    duration: 0.2,
  },
};

function MyCard({ id, title, setOverlay }) {
  return (
    <motion.div
      whileHover={moveUp}
      id={id}
      onClick={setOverlay}
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(/images/${id}.png)`,
      }}
    >
      <h3 id={id} className={styles.title}>
        {title}
      </h3>
    </motion.div>
  );
}

export default MyCard;
