import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import nextExit from "../../assets/nextExit.png";
import schedule from "../../assets/schedule.png";
import weather from "../../assets/weather.png";
import "./style.css";

const Work = () => {

    return (
        <section className="jumboContainer1 container">
      <div className="container">
        <Row id="mywork" className="headerRow2">
          <h2 className="headerText">Latest Projects</h2>
        </Row>
      </div>
      <div className="container">
        <Row className="workRow">
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Next Exit</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-envira fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={nextExit}
                aria="Riddle Me This Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                Next Exit is a social media platform for travelers to share about their experiences from different places. Travelers can post about their experiences, tips and tricks, and comment on other posts as travel ramps back up in the world.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://next-exit.herokuapp.com"
                >
                  View App
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Day Schedule</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-envira fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={schedule}
                aria="Schedule App Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  Application built with Javascript, jQuery, Moment, and Bootstrap. Use this digital day planner to schedule important events throughout the day. 
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://pgamboa322.github.io/workday-scheduler/"
                >
                  View App
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20 rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Weather Forecast</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-bootstrap fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={weather}
                aria="Weather App Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A Javascript application that displays a five day weather
                  forecast. Calling the open weather api, search for a city and
                  have the weekly weather display.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://pgamboa322.github.io/weather-dashboard/"
                >
                  View App
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
    )
}

export default Work;
