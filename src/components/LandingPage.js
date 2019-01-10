import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img src="https://lh3.googleusercontent.com/y4E74ATWfTit9un6cs1GmaGqLQx5z9AzEGepWk6XuEHxasMDhTRWBm9kW03NRBfdE0x6m3QObzB__ERoK0akwAOJct3kziTmQQlZkehDKhJ71plV0T_Wxz0m2Cfd1y9H5bVJdfDRfQ0QIPHHtzJFVspJK664X5Frmk84G5Hv1dLZfDWEtop_d4NmsuBv3bb8YFpE6Ul_T8W6WwWZs2vct6UnIaEhT__lzwIMtRI2sF5guctnGTYo1wDXuEbZ6B6HwLhpPkAGwMWcmQmGCGsX3Do8_bK94AU07keq71dOVCWwj556eYsEH0KPXOT_wBz7SWjJEd8pX3tl6AMREE9H4uXKOwPvRMtspPIBExQJB0SxSLBQJQJFTsii2v_2GlM2HAodXkJDipk1uYrLfdTCxqUy_a7V3WHbQ1ZfHllW44YjKOkYthdtknxytmCNxFDjn-W3SxrP9esAwW-TZQHiN80vSdJIVBDgMfRJn4vXzwmsuB_F4OyZE2yiZcIPhfEWDplsjBDfb1iAfmD3Is1B2qnoBKJahd0sSDOSpogrEmVGLA1gHABLTWMrWI04mjk6e18dYPU3RdssjeOLjLKgVJkpnML86nS4vGvKT7wALqlR_8g8oW6_85pSuWnIxHegzhoPqsgyNya05lbkrhdsZ6vO=w719-h767-no" alt="avatar" className="avatar-landing" />

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
