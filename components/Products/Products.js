import styles from "./Products.module.scss";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/MyCarousel";
import { products } from "../../info/info";
import { primaryColor } from "../../src/variables";

function Products() {
  return (
    <section id="products" className={styles.productSection}>
      <div className={styles.container}>
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
