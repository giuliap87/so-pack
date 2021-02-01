import styles from "./Products.module.scss";
import Heading from "../Heading/Heading";
import Carousel from "./Carousel/CarouselComponent";

function Products() {
  return (
    <section id="products" className={styles.productSection}>
      <div className={styles.container}>
        <Heading color="#000">Our products</Heading>
        <div className={styles.carousel}>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Products;
