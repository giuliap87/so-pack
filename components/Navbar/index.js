import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import styles from "./Navbar.module.css";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expand="sm"
      sticky="top"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand href="#home">So pack!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#product/packaging" className={styles.dropdown}>
                Packaging
              </NavDropdown.Item>
              <NavDropdown.Item href="#product/finished product" className={styles.dropdown}>
                Finished Product
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
