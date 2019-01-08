import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img src="https://lh3.googleusercontent.com/-ws6Z7R99MlvmULsuHAQxgztIWDOiLY6DNGSNdnx5bf8uDwNVhn2MPg0cjgA9EmU9D026-vU3BHccp2M8rPm_wyoySRsDJ06UR19rFJk277ZUGMVdeASp23O4djWWvigC_nEAdX_rC1MnZKWRE8TWhd68ihe-IlaG4xMIx1BOkgjPWRvxxn3EaVYDRvNYwUaRO2naVQHr45YU6_nuBF_NUah3XSTjBuPPQp-yrd3qPbF18Pl1sht0BxmTyWf-rWwpiK1gOilwSr46FVsySJ8r4rNbvMzES_W4HYzckM1bObEPhfiOk9VXXm0P1Bq321kcQaJlgA1Vl_hYicuJIwDAiAzr_cInQQx9Rokk3dRds2PfqRgXEIztZuH9XN_vDQCEBqIggk43Rj6tWs9z7ifbje_G3nsapbKM6DlQlqfMAIbIRNQt9IS3Ub-_PWcd9-XN2iwW62Kyj-daMT2YySXoaOX-afPp2L5ZXIKnTkrGgqGkKH-XaEKwpuj7Bb4w_j-GoLincIFv3Xo_WeDYK13FTAJqQiUgwUoQrhjIMyM4_evX0NcQV5DEWeGYbJCdU4pO4QGvR1ts8HWecs4KUnsvRFWM9arkRj3WlZY_ElfKZiIBE7JDt1WaLi_FIX9w-AyhlR8IEm_6Y9oJpVJv13NX4Hp=w719-h767-no" alt="avatar" className="avatar-landing" />

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
