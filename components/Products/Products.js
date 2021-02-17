import styles from "./Products.module.scss";
import Heading from "../Heading/Heading";
import Slider from "../Carousel/SimpleCarousel";
import { primaryColor } from "../../src/variables";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

function Products() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <section id="products" className={styles.productSection}>
      <div className={styles.container} data-aos="fade-up">
        <Heading color={primaryColor}>Our products</Heading>
        <Slider />
      </div>
    </section>
  );
}

export default Products;
