import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import './style.css'

const Contact = () => {
  return (
    <section className="jumboContainer1 container box">
      <div className="container">
        <Row id="contact">
          <Col className="contactCol" col-xs-12 col-md-4>
            <div>
            <h3 className="contact">Let's Connect</h3>
            <p className="contactP">I'm always looking for new connections.</p>
            </div>
          </Col>
            
            
          <Col className="contactCol1" col-xs-12 col-md-8>
            <a
              href="https://www.linkedin.com/in/paulina-gamboa-489818233/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fab fa-linkedin fa-3x contactIcon"></i>
            </a>
            <a
              href="https://github.com/pgamboa322"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fab fa-github fa-3x contactIcon"></i>
            </a>
            <a href="tel:4322884735">
              <i class="fas fa-phone-square fa-3x contactIcon"></i>
            </a>

            <a href="mailto:pgamboa322@gmail.com">
              <i class="fas fa-envelope fa-3x contactIcon"></i>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
