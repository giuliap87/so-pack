import { useState, useEffect } from "react";
import styles from "./SimpleCarousel.module.scss";
import { products } from "../../../info/info";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function SimpleCarousel({showOverlay}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const [show, setShow] = useState(3);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 992) {
      setShow(3);
    } else if (windowWidth < 992 && windowWidth > 768) {
      setShow(2);
    } else if (windowWidth < 768) {
      setShow(1);
    }

    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 992) {
        setShow(3);
      } else if (windowWidth < 992 && windowWidth > 768) {
        setShow(2);
      } else if (windowWidth < 768) {
        setShow(1);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  function next() {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }

  function prev() {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }

  function handleTouchStart(e) {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove(e) {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {currentIndex > 0 && (
          <button className={styles.leftArrow} onClick={prev}>
            <ChevronLeftIcon />
          </button>
        )}
        <div
          className={styles.contentWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={styles.content}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {products.map((product) => (
              <div key={product.name}>
                <img
                  src={product.src}
                  alt={product.name}
                  onClick={showOverlay}
                />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        </div>
        {currentIndex < length - show && (
          <button className={styles.rightArrow} onClick={next}>
            <ChevronRightIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default SimpleCarousel;
