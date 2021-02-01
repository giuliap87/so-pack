import styles from "./CarouselComponent.module.scss";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <div>
      <Carousel className={styles.carousel}>
        <Carousel.Item className={styles.item}>
          <img src={"images/1.png"} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/2.png"} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/3.png"} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/4.png"} alt="Fourth slide" />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/5.png"} alt="Fifth slide" />

          <Carousel.Caption>
            <h3>Fifth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
