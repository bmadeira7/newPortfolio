import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://lh3.googleusercontent.com/XxtG-ODjWPdssJCmaeyH4YsccP7t-fvcUkTvObJOeCQn3x_Xl0cifM9yEsqBeYg8WfSwHuCHfZ9xFWM12iL8Q4KAHeocChcS7jxm2YBjs2rkjgpWwe5apijJHFlqqukqtw2zUIv4SlvbayeZ-xhBSieTCjHYPoJtGvaabQpLaRwvaU1qF5qCkLc-oPJWoJgv4no-Dtu7zXEKRHpidmfU2_ZI36XKOHsEcyeu069zuvRl0BYXGyJGgrBEomePXCkw6Ds7s25wQYUyF5iZJHeWM3UL1DEy6vJgf-t77SORIgIq7X8Xd1-Te_B4GEuN0y583pm_g7Yh2ZxA79SY0c0zMvSau5fCF9pgOBqsGjNaueOhLVvdHr1TB2HYvar-lR8gH_A9kBIr-dreki5SWmI_KQ0gu1r-bkIhjLybkDf1Tf75ZSwZyvY0zJDR_gjw54FMoSEylnSRlpzdlA020Q2j3M6VzXhX_LYWdjOuWLM87eZ3RptA5CXlKcMA_Lm0jrwElEqaZdiWvr_QJn6ILJc8KDOVt5hp13a80XMxvqyBA9Oyr4CUaWWAdL85t9_t561IDYFqq4D9kUFWdYdVDa5DbaGJ69cE0odp_fDRi8_Xvy6XKX0oQfgWUO_JglBkle4bsT6kzNLV1JKtbIZu0EpRF0U8=w719-h767-no" alt="avatar" className="avatar-img" />

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
