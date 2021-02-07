import styles from "./Overlay.module.scss";
import Carousel from "../Carousel/MyCarousel";
import CloseIcon from "@material-ui/icons/Close";

function Overlay({ description, close, images }) {
  return (
    <div className={styles.container}>
      <button className={styles.closeBtn} onClick={close}>
        <CloseIcon className={styles.closeIcon} />
      </button>
      <Carousel size="small" className={styles.carousel} details={images} />
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Overlay;
