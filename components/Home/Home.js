import styles from "./Home.module.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function HomePageSection() {
  return (
    <section className={styles.homeSection}>
      <h1 className={styles.logo}>
        So Pack<span>!</span>
      </h1>
      <a href="#about" className={styles.scrollDown}>
        <KeyboardArrowDownIcon />
      </a>
    </section>
  );
}

export default HomePageSection;
