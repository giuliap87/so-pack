import styles from "./Process.module.scss";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { processInfo } from "../../../info/info";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

function Process() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="process" className={styles.container} data-aos="fade-up">
      <div className={styles.process}>
        <h1 className={styles.processTitle}>
          Our Process <AutorenewIcon />
        </h1>
        <div className={styles.stepsContainer}>
          {processInfo.map((step, i) => (
            <div className={styles.step} key={step.title}>
              <h4 className={styles.title}>
                <span style={{position: "absolute", top: 0}}> {`${i + 1} `}</span>
                <br />
                {` ${step.title}`}
              </h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
