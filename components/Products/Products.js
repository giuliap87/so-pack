import styles from "./Products.module.scss";
import Heading from "../Heading/Heading";
import Slider from "../Carousel/SimpleCarousel/SimpleCarousel";
import Overlay from "../../components/Carousel/SimpleCarousel/Overlay";
import { primaryColor } from "../../src/variables";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

function Products() {
  const [overlay, setOverlay] = useState(false);
  const [src, setSrc] = useState(null);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  useEffect(() => {
    overlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [overlay]);

  function showOverlay(e) {
    setSrc(e.target.src);
    setProductName(e.target.alt);
    setOverlay(true);
  }

  function closeOverlay() {
    setOverlay(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <Overlay
        overlay={overlay}
        src={src}
        productName={productName}
        closeOverlay={closeOverlay}
      />
      <section id="products" className={styles.productSection}>
        <div className={styles.container} data-aos="fade-up">
          <Heading color={primaryColor}>Our products</Heading>
          <Slider showOverlay={showOverlay} />
        </div>
      </section>
    </div>
  );
}

export default Products;
