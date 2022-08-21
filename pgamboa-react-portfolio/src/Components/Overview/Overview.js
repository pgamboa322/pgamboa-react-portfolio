import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import pgimage from "../../assets/pgimage.png";
import { Image } from "react-bootstrap";


const Overview = () => {
  return (
    <>
      <section id="#home" className="jumboContainer container">
        <div className="boxContainer">
          <div className="flexyBox imgBox">
            <Image
              fluid
              src={pgimage}
              aria="PaulinaGamboaImage"
              className="profileImg"
            />
          </div>
          <div className="flexyBox">
            <h1 className="header">Hey Friends</h1>
            <h3 className="subHeader">I am a Junior Developer.</h3>
            <br />
            <a href="#mywork">
              <button className="creationBtn">MY WORK</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
