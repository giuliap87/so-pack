import styles from "./FinishProduct.module.scss";
import Heading from "../Heading/Heading";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function FinishProduct() {
  return (
    <section className={styles.finishedProductSection}>
      <div className={styles.container}>
        <Heading color="#59363a">Full service projects</Heading>
        <p className={styles.description}>
          We manage the entire manufactoring process, from design and packaging
          conception to the filling and delivery. Thanks to our filling factory
          in the east of France, which specialized in luxury perfumery, we can
          control and guarantee the quality of our products even uring the last
          phase of manufactoring process. <span> Here is what we do:</span>
        </p>
        <a href="#process" className={styles.scrollDown}>
          <KeyboardArrowDownIcon />
        </a>
      </div>
    </section>
  );
}

export default FinishProduct;
