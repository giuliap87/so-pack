import styles from "./Process.module.scss";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {processInfo} from "../../../info/info";

function Process() {
  return (
    <div className={styles.container}>
      <div id="process" className={styles.process}>
        <h1 className={styles.processTitle}>Our Process <AutorenewIcon /></h1>
        <div className={styles.stepsContainer}>
          {processInfo.map((step) => (
            <div className={styles.step} key={step.title}>
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
