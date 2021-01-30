import styles from "./OurService.module.css";
import Heading from "../Heading/Heading";
import Link from "next/link";

function OurService() {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className={styles.container}>
        <Heading color="rgb(207, 2, 2)">Our services</Heading>
        <div className={styles.itemsContainer}>
          <Link href="/services/finished-product" passHref>
            <a className={styles.item}>Full Service Projects</a>
          </Link>
          <Link href="/services/packaging" passHref>
            <a className={styles.item}>Packaging Components</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurService;
