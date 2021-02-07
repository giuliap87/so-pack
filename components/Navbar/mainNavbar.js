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

    // const debounceScroll = debounce(handleScrolling, 500);
    document.addEventListener("scroll", handleScrolling);
    // () => {
    //   return document.removeEventListener("scroll", handleScrolling);
    // };
  }, [position]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className={position != "top" ? styles.navbarScroll : styles.navbar}
    >
      <div className={styles.container}>
        <Link href="/" passHref>
          <Navbar.Brand className={styles.logo}>
            <img src={"/images/logo.svg"} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {main && <Nav.Link href="/#about">About</Nav.Link>}
            {secondary && (
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            )}
            {main && (
              <>
                <Nav.Link href="/#services">Our Services</Nav.Link>
                <NavDropdown title="" id="collasible-nav-dropdown" className={styles.dropdownMenu}>
                  <Link href="/services/packaging" passHref>
                    <NavDropdown.Item className={styles.dropdownItem}>
                      Packaging Components
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/services/finished-product" passHref>
                    <NavDropdown.Item
                      href="/#product/finished product"
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
                    href="/#product/finished product"
                    className={styles.dropdownItem}
                  >
                    Finished Products
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            )}

            {main && (
              <>
                <Nav.Link href="/#products">Products</Nav.Link>
                <Nav.Link href="/#contacts">Contacts</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
