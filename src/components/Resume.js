import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
            <h2>Brian Madeira</h2>
              <img
                src="/brian-wearing-blk-tee.png"
                alt="avatar"
                className="avatar-img"
                style={{ height: "200px", paddingTop: '10px' }}
              />
            </div>
            
            <h4 style={{ color: "grey", textAlign: "center", paddingTop: '10px', paddingBottom: '10px' }}>Front End Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100"}} />
            
            <h5>Location</h5>
            <p>Fort Mill, South Carolina</p>
            <h5>Phone</h5>
            <p>407-575-9350</p>
            <h5>Email</h5>
            <a href="mailto: bmadeira7@gmail.com">bmadeira7@gmail.com</a>
            <br></br>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%"}} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={"08/2018"}
              endYear={"11/2018"}
              schoolName={
                "Full Stack Web Development Coding Bootcamp UNC Charlotte - Charlotte, NC"
              }
              schoolDescription={
                "A intense full time coding bootcamp teaching everything from basic HTML to building full stack applications"
              }
            />

            <Education
              startYear={"05/2018"}
              endYear={"12/2018"}
              schoolName={"Free Code Camp.org"}
              schoolDescription={
                "A free online school founded by Quincy Larson that makes learning web development accessible to everyone"
              }
            />

            <Education
              startYear={"10/2004"}
              endYear={"11/2005"}
              schoolName={"Full Sail University"}
              schoolDescription={
                "A school designed for the world of entertainment and media where I received an Associates in Audio Engineering"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startYear={"02/2016"}
              endYear={"05/2018"}
              jobName={"Flying Biscuit Cafe"}
              jobDescription={"Lead Server"}
            />

            <Experience
              startYear={"10/2012"}
              endYear={"02/2016"}
              jobName={"Maggiano’s Little Italy"}
              jobDescription={"Server"}
            />

            <Experience
              startYear={"10/2005"}
              endYear={"10/2012"}
              jobName={"Chili's Bar and Grill"}
              jobDescription={"Server Trainer"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
                <Skills 
                skill='HTML/CSS'
                progress={90}
                />
                <Skills 
                skill='Bootstrap'
                progress={85}
                />
                <Skills 
                skill='Javascript'
                progress={80}
                />
                <Skills 
                skill='jQuery'
                progress={80}
                />
                <Skills 
                skill='React'
                progress={70}
                />
                <Skills 
                skill='NodeJS'
                progress={60}
                />
                <Skills 
                skill='Express'
                progress={60}
                />
                <Skills 
                skill='MySQL'
                progress={60}
                />
                <Skills 
                skill='MongoDB'
                progress={60}
                />



          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
