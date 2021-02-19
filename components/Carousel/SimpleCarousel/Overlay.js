import styles from "./Overlay.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

function Overlay({ overlay, src, productName, closeOverlay }) {
  return (
    <>
      {overlay && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          }}
          className={styles.overlay}
          style={overlay && { opacity: 1 }}
        >
          <div className={styles.overlayContent}>
            <button onClick={closeOverlay}>
              <CloseIcon />
            </button>
            <img src={src} alt={productName} />
            <h4>{productName}</h4>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Overlay;
