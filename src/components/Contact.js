import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brian Madeira</h2>
            <img src="https://lh3.googleusercontent.com/XxtG-ODjWPdssJCmaeyH4YsccP7t-fvcUkTvObJOeCQn3x_Xl0cifM9yEsqBeYg8WfSwHuCHfZ9xFWM12iL8Q4KAHeocChcS7jxm2YBjs2rkjgpWwe5apijJHFlqqukqtw2zUIv4SlvbayeZ-xhBSieTCjHYPoJtGvaabQpLaRwvaU1qF5qCkLc-oPJWoJgv4no-Dtu7zXEKRHpidmfU2_ZI36XKOHsEcyeu069zuvRl0BYXGyJGgrBEomePXCkw6Ds7s25wQYUyF5iZJHeWM3UL1DEy6vJgf-t77SORIgIq7X8Xd1-Te_B4GEuN0y583pm_g7Yh2ZxA79SY0c0zMvSau5fCF9pgOBqsGjNaueOhLVvdHr1TB2HYvar-lR8gH_A9kBIr-dreki5SWmI_KQ0gu1r-bkIhjLybkDf1Tf75ZSwZyvY0zJDR_gjw54FMoSEylnSRlpzdlA020Q2j3M6VzXhX_LYWdjOuWLM87eZ3RptA5CXlKcMA_Lm0jrwElEqaZdiWvr_QJn6ILJc8KDOVt5hp13a80XMxvqyBA9Oyr4CUaWWAdL85t9_t561IDYFqq4D9kUFWdYdVDa5DbaGJ69cE0odp_fDRi8_Xvy6XKX0oQfgWUO_JglBkle4bsT6kzNLV1JKtbIZu0EpRF0U8=w719-h767-no" alt="avatar" className="avatar-img" 
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Front-End Web Developer with background in Audio Engineering and
              Full-Stack Certification from the UNC-Charlotte Coding Bootcamp.
              Enjoys collaborating with other developers and working together to
              create unique applications. Looking to combine knowledge of audio
              production with coding skill set to implement new and exciting
              ideas and solutions within the entertainment industry.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>

              <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fab fa-slack" aria-hidden="true" />
                    Brian Madeira
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    407-575-9350
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="mailto: bmadeira7@gmail.com">
                      bmadeira7@gmail.com
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fas fa-video" aria-hidden="true" />
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
