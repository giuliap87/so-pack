import styles from "./Footer.module.scss";
import Link from "next/link";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/#about" },
  { name: "our services", path: "/#services" },
  { name: "products", path: "/#products" },
  { name: "contacts", path: "/#contacts" },
  { name: "packaging components", path: "/services/packaging" },
  { name: "full service projects", path: "/services/finished-product" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        {links.map((link) => (
          <li>
            <Link href={link.path} passHref>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>
        Copyright So Pack {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
