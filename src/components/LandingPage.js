import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img src="/brian.PNG" alt="avatar" className="avatar-landing" />

            <div className="banner-text">
              <h1>Front End Web Developer</h1>

              <hr />
              <p>
                HTML | CSS | Bootstrap | Javascript | jQuery | React | NodeJS |
                Express | MySQL | MongoDB{" "}
              </p>

              <div className="social-links">
                {/* Github */}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/bmadeira7"
                  target="_blank"
                >
                  <i className="fab fa-github icon" />
                </a>
                {/* Linked In */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/brian-madeira/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin icon" />
                </a>
                {/* Free Code Camp */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.freecodecamp.org/brianmadeira"
                  target="_blank"
                >
                  <i className="fab fa-free-code-camp" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
