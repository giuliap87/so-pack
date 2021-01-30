import styles from "./Contacts.module.css";
import Heading from "../Heading/Heading";
import GoogleMap from "../GoogleMap/GoogleMap";
import Button from "@material-ui/core/Button";

const contacts = {
  name: "SoPack",
  address: "Address: Rue blabla, 1234 Paris - France",
  phone: "0348-593094",
  email: "sopack@gmail.com",
};

function Contacts() {
  return (
    <section id="contacts" className={styles.contactsSection}>
      <div className={styles.container}>
        <div className={styles.details}>
          <Heading color="#000">Contacts</Heading>
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
