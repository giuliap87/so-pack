import styles from "./About.module.scss";
import Heading from "../Heading/Heading";
import { white } from "../../src/variables";
import { motion } from "framer-motion";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div className={styles.container} data-aos="fade-up">
        <motion.div>
          <Heading color={white}>Custom-made perfumes</Heading>
        </motion.div>
        <motion.p className={styles.paragraph}>
          So pack is a perfumery and cosmetic manufacturing company based in
          Paris. We can realize your Made in France perfumes and create your own
          manufacturing company or we can manage the develoment of one or
          several components for perfumery and cosmetic.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default About;
