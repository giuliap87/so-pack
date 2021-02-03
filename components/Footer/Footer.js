import styles from "./Footer.module.scss";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/#about" },
  { name: "our services", path: "/#services" },
  { name: "products", path: "/#products" },
];

const services = [
  { name: "packaging components", path: "/services/packaging" },
  { name: "full service projects", path: "/services/finished-product" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        So <br />
        Pack!
      </div>
      <ul className={styles.footerList}>
        <h6>Company</h6>
        {links.map((link) => (
          <li>
            <Link href={link.path} passHref>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.footerList}>
        <h6>Our services</h6>
        {services.map((link) => (
          <li>
            <Link href={link.path} passHref>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.contactDetails}>
        <ul>
          <li>Rue blabla, 1234 Paris - France</li>
          <li>0348-593094</li>
        </ul>
        <Button variant="contained" href={`mailto:sopack@gmail.com`}>
          Contact us
        </Button>
        <p className={styles.copyright}>
          Copyright So Pack {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
