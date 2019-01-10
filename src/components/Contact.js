import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brian Madeira</h2>
            <img src="https://lh3.googleusercontent.com/y4E74ATWfTit9un6cs1GmaGqLQx5z9AzEGepWk6XuEHxasMDhTRWBm9kW03NRBfdE0x6m3QObzB__ERoK0akwAOJct3kziTmQQlZkehDKhJ71plV0T_Wxz0m2Cfd1y9H5bVJdfDRfQ0QIPHHtzJFVspJK664X5Frmk84G5Hv1dLZfDWEtop_d4NmsuBv3bb8YFpE6Ul_T8W6WwWZs2vct6UnIaEhT__lzwIMtRI2sF5guctnGTYo1wDXuEbZ6B6HwLhpPkAGwMWcmQmGCGsX3Do8_bK94AU07keq71dOVCWwj556eYsEH0KPXOT_wBz7SWjJEd8pX3tl6AMREE9H4uXKOwPvRMtspPIBExQJB0SxSLBQJQJFTsii2v_2GlM2HAodXkJDipk1uYrLfdTCxqUy_a7V3WHbQ1ZfHllW44YjKOkYthdtknxytmCNxFDjn-W3SxrP9esAwW-TZQHiN80vSdJIVBDgMfRJn4vXzwmsuB_F4OyZE2yiZcIPhfEWDplsjBDfb1iAfmD3Is1B2qnoBKJahd0sSDOSpogrEmVGLA1gHABLTWMrWI04mjk6e18dYPU3RdssjeOLjLKgVJkpnML86nS4vGvKT7wALqlR_8g8oW6_85pSuWnIxHegzhoPqsgyNya05lbkrhdsZ6vO=w719-h767-no" alt="avatar" className="avatar-img" 
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Front-End Web Developer with background in Audio Engineering and
              Full-Stack Certification from the UNC-Charlotte Coding Bootcamp.
              Enjoys collaborating with other developers and working together to
              create unique applications. Looking to combine knowledge of audio
              production with coding skill set to implement new exciting
              ideas and solutions within the entertainment industry.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List >

              <ListItem>
                  <ListItemContent
                    style={{ fontSize: "150%", fontFamily: "Anton" }}
                  >
                    <i style={{ fontSize: "150%"}} className="fab fa-slack" aria-hidden="true" />
                    Brian Madeira
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "150%", fontFamily: "Anton" }}
                  >
                    <i style={{ fontSize: "150%"}} className="fa fa-phone-square" aria-hidden="true" />
                    407-575-9350
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "150%", fontFamily: "Anton" }}
                  >
                    <i style={{ fontSize: "150%"}} className="fa fa-envelope" aria-hidden="true" />
                    <a href="mailto: bmadeira7@gmail.com">
                      bmadeira7@gmail.com
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "150%", fontFamily: "Anton" }}
                  >
                    <i style={{ fontSize: "150%"}} className="fas fa-video" aria-hidden="true" />
                    <a href="https://zoom.us/j/2345931293">
                      Zoom - Personal Meeting ID
                    </a>
                  </ListItemContent>
                </ListItem>

               
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
