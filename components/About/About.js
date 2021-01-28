import styles from "./About.module.css";

function About() {
  return (
      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Custom-made perfumes</h1>
          <div className={styles.border}></div>
          <p className={styles.paragraph}>
            So pack is a perfumery and cosmetic manufacturing company based in
            Paris. We can realize your Made in France perfumes and create your
            own manufacturing company or we can manage the develoment of one or
            several components for perfumery and cosmetic.
          </p>
        </div>
      </section>
  );
}

export default About;
