import styles from "./Overlay.module.scss";
import Carousel from "../Carousel/MyCarousel";
import CloseIcon from "@material-ui/icons/Close";

function Overlay({ description, close, images}) {
  return (
    <div className={styles.container}>
      <CloseIcon className={styles.closeIcon} onClick={close} />
      <Carousel className={styles.carousel} details={images} />
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Overlay;
