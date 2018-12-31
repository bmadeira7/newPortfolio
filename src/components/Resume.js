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
              <img
                src="https://lh3.googleusercontent.com/XxtG-ODjWPdssJCmaeyH4YsccP7t-fvcUkTvObJOeCQn3x_Xl0cifM9yEsqBeYg8WfSwHuCHfZ9xFWM12iL8Q4KAHeocChcS7jxm2YBjs2rkjgpWwe5apijJHFlqqukqtw2zUIv4SlvbayeZ-xhBSieTCjHYPoJtGvaabQpLaRwvaU1qF5qCkLc-oPJWoJgv4no-Dtu7zXEKRHpidmfU2_ZI36XKOHsEcyeu069zuvRl0BYXGyJGgrBEomePXCkw6Ds7s25wQYUyF5iZJHeWM3UL1DEy6vJgf-t77SORIgIq7X8Xd1-Te_B4GEuN0y583pm_g7Yh2ZxA79SY0c0zMvSau5fCF9pgOBqsGjNaueOhLVvdHr1TB2HYvar-lR8gH_A9kBIr-dreki5SWmI_KQ0gu1r-bkIhjLybkDf1Tf75ZSwZyvY0zJDR_gjw54FMoSEylnSRlpzdlA020Q2j3M6VzXhX_LYWdjOuWLM87eZ3RptA5CXlKcMA_Lm0jrwElEqaZdiWvr_QJn6ILJc8KDOVt5hp13a80XMxvqyBA9Oyr4CUaWWAdL85t9_t561IDYFqq4D9kUFWdYdVDa5DbaGJ69cE0odp_fDRi8_Xvy6XKX0oQfgWUO_JglBkle4bsT6kzNLV1JKtbIZu0EpRF0U8=w719-h767-no"
                alt="avatar"
                className="avatar-img"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Brian Madeira</h2>
            <h4 style={{ color: "grey" }}>Front End Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Front-End Web Developer with background in Audio Engineering and
              Full-Stack Certification from the UNC-Charlotte Coding Bootcamp.
              Enjoys collaborating with other developers and working together to
              create unique applications. Looking to combine knowledge of audio
              production with coding skill set to implement new and exciting
              ideas and solutions within the entertainment industry.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Fort Mill, South Carolina</p>
            <h5>Phone</h5>
            <p>407-575-9350</p>
            <h5>Email</h5>
            <a href="mailto: bmadeira7@gmail.com">bmadeira7@gmail.com</a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
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
                "An amazing and free online school that teaches many different coding languages and offers certificates upon completion of course work"
              }
            />

            <Education
              startYear={"10/2004"}
              endYear={"11/2005"}
              schoolName={"Full Sail University"}
              schoolDescription={
                "A well known arts school where I was taught Audio Engineering"
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
                progress={100}
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
