import styles from "./MyCarousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel({ details }) {
  return (
    <div>
      <Carousel className={styles.carousel}>
        {details.map((item) => (
          <Carousel.Item className={styles.carouselItem} key={item.name}>
            <img src={item.src} alt={item.name} />
            <Carousel.Caption>
              <h3>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
