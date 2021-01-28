import styles from "./OurService.module.css";
import Link from "next/link";

function OurService() {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our services</h1>
        <div className={styles.border}></div>
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
