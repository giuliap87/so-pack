import styles from "./FinishProduct.module.css";
import Heading from "../Heading/Heading";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const details = [
  {
    id: 0,
    title: "Branding",
    description:
      "We manage the development of several components of perfumery and cosmetic.",
  },
  {
    id: 1,
    title: "Design",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 2,
    title: "Fragrance",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 3,
    title: "Development & filling",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 4,
    title: "Legal formalities",
    description:
      "Thanks to our design experience and creativity our creations are unique and captivating. We can provide you with a complete design study, adapted too your needs and expectations. From the bottle to the secondary packaging.",
  },
  {
    id: 5,
    title: "Manufacturing Companies",
    description:
      "We manage the development of several components of perfumery and cosmetic.",
  },
];

function FinishProduct() {
  return (
    <section className={styles.finishedProductSection}>
      <div className={styles.container}>
        <Heading color="rgb(207, 3, 3)">Full service projects</Heading>
        <p className={styles.description}>
          We manage the entire manufactoring process, from design and packaging
          conception to the filling and delivery. Thanks to our filling factory
          in the east of France, which specialized in luxury perfumery, we can
          control and guarantee the quality of our products even uring the last
          phase of manufactoring process. <span> Here is what we do:</span>
        </p>
        <a href="#process" className={styles.scrollDown}>
          <KeyboardArrowDownIcon />
        </a>
      </div>
      <div id="process" className={styles.process}>
        <h1 className={styles.processTitle}>Our Process</h1>
        <div className={styles.stepsContainer}>
          {details.map((step) => (
            <div className={styles.step}>
              <h4 className={styles.title}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FinishProduct;
