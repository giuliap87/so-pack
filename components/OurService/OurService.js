import styles from "./OurService.module.scss";
import Heading from "../Heading/Heading";
import Link from "next/link";
import { primaryColor } from "../../src/variables";
import { motion } from "framer-motion";

const scale = {
  scale: 1.1,
  transition: {
    duration: 0.2,
  },
};

function OurService() {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className={styles.container}>
        <Heading color={primaryColor}>Our services</Heading>
        <div className={styles.itemsContainer}>
          <Link href="/services/finished-product" passHref>
            <motion.a className={styles.item} whileHover={scale} whileFocus={scale}>
              Full Service <br /> Projects
            </motion.a>
          </Link>
          <Link href="/services/packaging" passHref>
            <motion.a className={styles.item} whileHover={scale} whileFocus={scale}>
              Packaging <br /> Components
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurService;
