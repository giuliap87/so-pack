import styles from "./Contacts.module.scss";
import Heading from "../Heading/Heading";
import GoogleMap from "../GoogleMap/GoogleMap";
import Button from "@material-ui/core/Button";
import {primaryColor} from "../../src/variables";
import {contacts} from "../../info/info";

function Contacts() {
  return (
    <section id="contacts" className={styles.contactsSection}>
      <div className={styles.container}>
        <div className={styles.details}>
          <Heading color={primaryColor}>Contacts</Heading>
          <ul className={styles.list}>
            <li>{contacts.name}</li>
            <li>{contacts.address}</li>
            <li>{contacts.phone}</li>
            <li>{contacts.email}</li>
          </ul>
          <Button variant="contained" color="primary" className={styles.contactBtn}>
            <a href={`mailto:${contacts.email}`} style={{color: "white", textDecoration: "none"}}>Contact us</a>
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
