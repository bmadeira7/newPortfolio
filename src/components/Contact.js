import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brian Madeira</h2>
            <img src="/brian.png" alt="avatar" className="avatar-landing" 
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
