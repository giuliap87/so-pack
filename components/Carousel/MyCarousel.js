import styles from "./MyCarousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel({ details, size }) {
  return (
    <div>
      <Carousel
        className={
          size === "big"
            ? styles.carouselBig
            : styles.carouselSmall
        }
      >
        {details.map((item) => (
          <Carousel.Item
            className={
              size === "big"
                ? styles.carouselItemBig
                : styles.carouselItemSmall
            }
            key={item.name}
          >
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
