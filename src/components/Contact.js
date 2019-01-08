import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brian Madeira</h2>
            <img src="https://lh3.googleusercontent.com/-ws6Z7R99MlvmULsuHAQxgztIWDOiLY6DNGSNdnx5bf8uDwNVhn2MPg0cjgA9EmU9D026-vU3BHccp2M8rPm_wyoySRsDJ06UR19rFJk277ZUGMVdeASp23O4djWWvigC_nEAdX_rC1MnZKWRE8TWhd68ihe-IlaG4xMIx1BOkgjPWRvxxn3EaVYDRvNYwUaRO2naVQHr45YU6_nuBF_NUah3XSTjBuPPQp-yrd3qPbF18Pl1sht0BxmTyWf-rWwpiK1gOilwSr46FVsySJ8r4rNbvMzES_W4HYzckM1bObEPhfiOk9VXXm0P1Bq321kcQaJlgA1Vl_hYicuJIwDAiAzr_cInQQx9Rokk3dRds2PfqRgXEIztZuH9XN_vDQCEBqIggk43Rj6tWs9z7ifbje_G3nsapbKM6DlQlqfMAIbIRNQt9IS3Ub-_PWcd9-XN2iwW62Kyj-daMT2YySXoaOX-afPp2L5ZXIKnTkrGgqGkKH-XaEKwpuj7Bb4w_j-GoLincIFv3Xo_WeDYK13FTAJqQiUgwUoQrhjIMyM4_evX0NcQV5DEWeGYbJCdU4pO4QGvR1ts8HWecs4KUnsvRFWM9arkRj3WlZY_ElfKZiIBE7JDt1WaLi_FIX9w-AyhlR8IEm_6Y9oJpVJv13NX4Hp=w719-h767-no" alt="avatar" className="avatar-img" 
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
