import styles from "./Contacts.module.scss";
import Heading from "../Heading/Heading";
import GoogleMap from "../GoogleMap/GoogleMap";
import Button from "@material-ui/core/Button";
import { primaryColor } from "../../src/variables";
import { contacts } from "../../info/info";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

function Contacts() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <section id="contacts" className={styles.contactsSection}>
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.details}>
          <Heading color={primaryColor}>Contacts</Heading>
          <ul className={styles.list}>
            <li>{contacts.name}</li>
            <li>{contacts.address}</li>
            <li>{contacts.phone}</li>
            <li>{contacts.email}</li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            className={styles.contactBtn}
          >
            <a
              href={`mailto:${contacts.email}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact us
            </a>
          </Button>
        </div>
        <div>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
