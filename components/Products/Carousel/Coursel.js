import styles from "./Carousel.module.css";
import Carousel from "react-bootstrap/Carousel";

function Coursel() {
  return (
    <div>
      <Carousel className={styles.carousel}>
        <Carousel.Item className={styles.item}>
          <img src={"images/first.png"} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/second.png"} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/third.png"} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/fourth.png"} alt="Fourth slide" />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img src={"images/fifth.png"} alt="Fifth slide" />

          <Carousel.Caption>
            <h3>Fifth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Coursel;
