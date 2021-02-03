import styles from "./Process.module.scss";
import AutorenewIcon from '@material-ui/icons/Autorenew';

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

function Process() {
  return (
    <div className={styles.container}>
      <div id="process" className={styles.process}>
        <h1 className={styles.processTitle}>Our Process <AutorenewIcon /></h1>
        <div className={styles.stepsContainer}>
          {details.map((step) => (
            <div className={styles.step}>
              <h4 className={styles.title}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
