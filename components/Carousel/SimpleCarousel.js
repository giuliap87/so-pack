import { useState, useEffect } from "react";
import styles from "./SimpleCarousel.module.scss";
import { products } from "../../info/info";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [src, setSrc] = useState(null);
  const [productName, setProductName] = useState("");
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

  //overlay

  function showOverlay(e) {
    setSrc(e.target.src);
    setProductName(e.target.alt);
    setOverlay(true);
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <div className={styles.container}>
      {overlay && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          }}
          className={styles.overlay}
          style={overlay && { opacity: 1 }}
        >
          <button onClick={() => setOverlay(false)}>
            <CloseIcon />
          </button>
          <img src={src} alt={productName} />
          <h4>{productName}</h4>
        </motion.div>
      )}
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

