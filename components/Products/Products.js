import styles from "./Products.module.scss";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/MyCarousel";
import { products } from "../../info/info";
import { primaryColor } from "../../src/variables";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

function Products() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="products" className={styles.productSection}>
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.textContainer}>
          <Heading color={primaryColor}>Our products</Heading>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            lobortis, ex et finibus suscipit, ante nibh vulputate tellus.
          </p>
        </div>
        <Carousel details={products} size="big" />
      </div>
    </section>
  );
}

export default Products;
