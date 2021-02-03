import styles from "./OurService.module.scss";
import Heading from "../Heading/Heading";
import Link from "next/link";

function OurService() {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className={styles.container}>
        <Heading color="#59363a">Our services</Heading>
        <div className={styles.itemsContainer}>
          <Link href="/services/finished-product" passHref>
            <a className={styles.item}>
              Full Service <br /> Projects
            </a>
          </Link>
          <Link href="/services/packaging" passHref>
            <a className={styles.item}>
              Packaging <br /> Components
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurService;
