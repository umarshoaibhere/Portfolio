import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Umar Shoaib </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I have an Information Technology graduate passionate about technology's transformative potential.
            Trained at Jspiders Hyderabad, I've mastered core Java and am currently advancing my skills in advanced Java and ReactJS.
            Alongside, I've delved into web technologies like HTML5, CSS3, and JavaScript, while also becoming proficient in SQL.
            <br />
            Driven by a thirst for knowledge and a knack for problem-solving,
            I continuously expand my skill set to stay abreast of emerging trends. 
            Eager to apply my expertise and contribute to innovative projects in software development.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming is the art of telling another human being what one wants the computer to do"{" "}
          </p>
          <footer className="blockquote-footer">Umar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
