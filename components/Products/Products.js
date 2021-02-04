import styles from "./Products.module.scss";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/MyCarousel";
import {products } from "../../info/info"

function Products() {
  return (
    <section id="products" className={styles.productSection}>
      <div className={styles.container}>
        <Heading color="#59363a">Our products</Heading>
        <div className={styles.carousel}>
          <Carousel size="big" details={products} />
        </div>
      </div>
    </section>
  );
}

export default Products;

