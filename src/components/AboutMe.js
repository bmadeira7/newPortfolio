import React, { Component } from "react";
import { Card, CardTitle, CardText } from "react-mdl";
class About extends Component {
  render() {
    return (
      <Card
        shadow={5}
        style={{ minWidth: "950px", margin: "auto", marginTop: "3%" }}
      >
        <CardTitle
          style={{ color: "#fff", height: "150px" }}
          className="aboutMe"
        >
          About Me
        </CardTitle>
        <CardText>
          <p style={{ fontSize: "20px" }}>
            I have always found satisfaction in creating things. It began with
            writing songs and practicing with my band as a teenager to taking a
            more digital approach to audio production after graduating from Full
            Sail. Currently, I enjoy creating web applications and solving
            technical problems with Javascript. The UNC Coding Bootcamp taught
            me a multitude of web development technologies, and I continue to
            seek out and learn new technologies constantly.
          </p>
          <p style={{ fontSize: "20px" }}>
            I am seeking a Front End Web Development position in which I may
            apply my current skillset, while continuing to learn new and
            exciting web development technologies.
          </p>
        </CardText>
      </Card>
    );
  }
}

export default About;
