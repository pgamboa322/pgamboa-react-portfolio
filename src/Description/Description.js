import React from "react";
import { Row, Col } from "react-bootstrap";

import  "./style.css";

const Description = () => {

    return (
        <section className="jumboContainer ">
        <div className="container">
          <Row id="about" className="headerRow">
            <h2 className="headerText">What I do</h2>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col className="containerCol">
              <Row>
                <i class="fas fa-laptop-code fa-3x workIcon" />
              </Row>
              <Row>
                <h2 className="subText">Web Development</h2>
              </Row>
              <Row>
                <p className="text">
                  I work on developing both client and sever software systems. I enjoy learning about various stages of the development process.
                </p>
              </Row>
            </Col>
            <Col className="containerCol">
              <Row>
              <i class="fas fa-chalkboard-teacher fa-3x workIcon"></i>
              </Row>
              <Row>
                <h2 className="subText">Merging the Gap</h2>
              </Row>
              <Row>
                <p className="text">
                  I've been an educator for eight years and
                  understand the role technology plays in education. I'm eager to develop systems that enpower both students and educators. 
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    )
}

export default Description;