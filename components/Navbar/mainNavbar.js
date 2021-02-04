import { useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { debounce } from "lodash";

function NavigationBar({ main, secondary }) {
  const [position, setPosition] = useState("top");

  useEffect(() => {
    const handleScrolling = () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setPosition("moved");
      } else {
        setPosition("top");
      }
    };

    const debounceScroll = debounce(handleScrolling, 20);
    document.addEventListener("scroll", debounceScroll);
    () => {
      return document.removeEventListener("scroll", handleScrolling);
    };
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
          <Navbar.Brand className={styles.logo}>
            <img src={"/images/logo.svg"} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {main && (
              <Link href="#about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
            )}
            {secondary && (
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            )}
            {main && (
              <>
                <Nav.Link href="#services">Our Services</Nav.Link>
                <NavDropdown title="" id="collasible-nav-dropdown">
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
              </>
            )}
            {secondary && (
              <NavDropdown title="Our Services" id="collasible-nav-dropdown">
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
            )}

            {main && (
              <>
                <Link href="#products" passHref><Nav.Link>Products</Nav.Link></Link>
                <Link href="#contacts" passHref><Nav.Link>Contacts</Nav.Link></Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
