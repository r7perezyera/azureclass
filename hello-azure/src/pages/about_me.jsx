import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

import { Navbar } from '../components/navbar';

export const AboutMe = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Row>
          <Col lg={12}>
            <h1>Hola, Azure Static Web Apps..!</h1>
          </Col>

          <Col lg={12}>
            <hr />
            <h2>¡Lo lograste!</h2>
            <p>Bienvenido/a a mi página hosteada en Azure Static Web Apps</p>
            <p>... (Preview)</p>
            <p>
              Aprendimos a montar esto en Azure en la clase "Asegura tu futuro
              en la nube".
            </p>
            <br />
            <p>
              Seguramente nunca habías oído hablar de mí, pero si quieres
              conocerme un poco más, sigue leyendo. Uso el espacio a
              continuación para compartir quién soy y qué he estado haciendo
              estos últimos meses.
            </p>
          </Col>

          <Col lg={12}>
              <hr/>
              <h2>Sobre mí:</h2>
              <ul>
                  <li>Soy estudiante de sistemas computacionales, a un año de graduarme.</li>
                  <li>Mi área favorita del vasto mundo de las TIC son las redes y el internet.</li>
                  <ul>
                      <li>
                          <Badge variant='info'>Cisco Certified</Badge>{' '}
                          En enero de este año pasé el examen que me acredita como Cisco Certified Network Associate.
                      </li>
                  </ul>
              </ul>
          </Col>

          <Col lg={12}>
              <hr/>
              <h2>Qué he estado haciendo, cómo llegué aquí...</h2>
              <ul>
                  <li>Este semestre mi curso favorito fue seguridad informática</li>
                  <ul>
                      <li>En mi opinión, llevé la materia con un excelente instructor</li>
                      <li>Actualmente creo que podría dirigir mi trayectoria profesional hacia seguridad, así como a redes.</li>
                  </ul>
                  <li>Para el curso de administración de proyectos de ingeniería de software, mis amigos y yo generamos en conjunto una aplicación web completa: front y back.</li>
                  <ul>
                      <li>Fue ahí donde empecé a familiarizarme con React, y el poderosísimo React-Bootstrap (usado aquí).</li>
                  </ul>
                  <li>En el curso de desarrollo de aplicaciones web tuve oportunidad de familiarizarme con la nube pública de Amazon.</li>
                  <ul>
                      <li>Y este taller y este ejercicio han sido una excelente oportunidad para conocer qué ofrece Microsoft de su lado.</li>
                  </ul>
              </ul>
          </Col>
        </Row>

        <hr />
        <Row>
          <Col className="bold text-center">
            Roberto T. Diciembre 2020.
          </Col>
        </Row>
      </Container>
    </>
  );
};
