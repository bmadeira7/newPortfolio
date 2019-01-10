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
                src="https://lh3.googleusercontent.com/y4E74ATWfTit9un6cs1GmaGqLQx5z9AzEGepWk6XuEHxasMDhTRWBm9kW03NRBfdE0x6m3QObzB__ERoK0akwAOJct3kziTmQQlZkehDKhJ71plV0T_Wxz0m2Cfd1y9H5bVJdfDRfQ0QIPHHtzJFVspJK664X5Frmk84G5Hv1dLZfDWEtop_d4NmsuBv3bb8YFpE6Ul_T8W6WwWZs2vct6UnIaEhT__lzwIMtRI2sF5guctnGTYo1wDXuEbZ6B6HwLhpPkAGwMWcmQmGCGsX3Do8_bK94AU07keq71dOVCWwj556eYsEH0KPXOT_wBz7SWjJEd8pX3tl6AMREE9H4uXKOwPvRMtspPIBExQJB0SxSLBQJQJFTsii2v_2GlM2HAodXkJDipk1uYrLfdTCxqUy_a7V3WHbQ1ZfHllW44YjKOkYthdtknxytmCNxFDjn-W3SxrP9esAwW-TZQHiN80vSdJIVBDgMfRJn4vXzwmsuB_F4OyZE2yiZcIPhfEWDplsjBDfb1iAfmD3Is1B2qnoBKJahd0sSDOSpogrEmVGLA1gHABLTWMrWI04mjk6e18dYPU3RdssjeOLjLKgVJkpnML86nS4vGvKT7wALqlR_8g8oW6_85pSuWnIxHegzhoPqsgyNya05lbkrhdsZ6vO=w719-h767-no"
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
                skill='Javascript/jQuery'
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
