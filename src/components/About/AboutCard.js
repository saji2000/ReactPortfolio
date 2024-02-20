import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sajad Daneshmand </span>
            from <span className="purple"> Toronto, Ontario.</span>
            <br />
            I have Co-Founded and been the CEO at Maple.
            <br />I gradutaded from{" "}
            <span className="purple">University of Alberta </span> with
            Bachelor's of Applied Sciences in{" "}
            <span className="purple"> Software Engineering</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about religion and history
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
