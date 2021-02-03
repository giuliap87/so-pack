import styles from "./Overlay.module.scss";
import Carousel from "../Carousel/MyCarousel";
import CloseIcon from "@material-ui/icons/Close";

const details = [
  { src: "/images/1.png", name: "First Image" },
  { src: "/images/2.png", name: "Second Image" },
];

function Overlay({ description, close }) {
  return (
    <div className={styles.container}>
      <CloseIcon className={styles.closeIcon} onClick={close} />
      <Carousel className={styles.carousel} details={details} />
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Overlay;
