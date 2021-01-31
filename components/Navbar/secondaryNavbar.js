import { useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import styles from "./Navbar.module.css";
import Link from "next/link";

function NavigationBar() {
  const [position, setPosition] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setPosition("moved");
      } else {
        setPosition("top");
      }
    });
  }, [position]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className={position != "top" ? styles.navbarScroll : styles.navbar}
    >
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>So pack!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <NavDropdown
              className={styles.dropdownMenu}
              title="Our Services"
              id="collasible-nav-dropdown"
            >
              <Link href="/services/packaging" passHref>
                <NavDropdown.Item className={styles.dropdownItem}>
                  Packaging Components
                </NavDropdown.Item>
              </Link>
              <Link href="/services/finished-product" passHref>
                <NavDropdown.Item
                  href="#product/finished product"
                  className={styles.dropdownItem}
                >
                  Finished Products
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
