import styles from "./Footer.module.css";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "#about" },
  { name: "our services", path: "#services" },
  { name: "products", path: "#products" },
  { name: "contacts", path: "#contacts" },
  { name: "packaging components", path: "/services/packaging" },
  { name: "full service projects", path: "/services/finished-product" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        {links.map((link) => (
          <li>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>Copyright So Pack {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
