import React from 'react';
import { Navbar as BootstrapNavbar, Container } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <>
      <Container>
        <BootstrapNavbar expand="lg" variant="dark" bg="dark">
          <BootstrapNavbar.Brand href="#">Hola Azure</BootstrapNavbar.Brand>

          {/* <Nav className="mr-auto">
            <Nav.Link href="#welcome">
              Bienvenida
            </Nav.Link>
            <Nav.Link href="#rationale">
              Rationale
            </Nav.Link>
            <Nav.Link href="#whoami">
              Sobre mí
            </Nav.Link>
            <Nav.Link href="#contact">
              Contacto
            </Nav.Link>
          </Nav> */}
        </BootstrapNavbar>
      </Container>
    </>
  );
};
