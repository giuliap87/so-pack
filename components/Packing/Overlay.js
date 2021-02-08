import styles from "./Overlay.module.scss";
import Carousel from "../Carousel/MyCarousel";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

function Overlay({ description, close, images }) {
  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="show"
      variants={fadeIn}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      }}
    >
      <button className={styles.closeBtn} onClick={close}>
        <CloseIcon className={styles.closeIcon} />
      </button>
      <Carousel size="small" className={styles.carousel} details={images} />
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}

export default Overlay;
