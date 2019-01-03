import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* PROJECT 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover"
              }}
            >
              Fala Mobile Messaging App
            </CardTitle>
            <CardText>
              A responsive messaging service built with JSX in React and using Bootstrap and Pusher Chatkit
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bmadeira7/falaChat" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://shrouded-island-48843.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* PROJECT 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
              <Button colored>Live-Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
              <Button colored>Live-Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } 
    
    else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* PROJECT 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://static.frontendmasters.com/assets/courses/2012-02-12-introduction-to-javascript-jquery/thumb.jpg) center / cover"
            }}
          >
            Javascript/jQuery project #1
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* PROJECT 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://static.frontendmasters.com/assets/courses/2012-02-12-introduction-to-javascript-jquery/thumb.jpg) center / cover"
            }}
          >
            Javascript/jQuery project #2
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://static.frontendmasters.com/assets/courses/2012-02-12-introduction-to-javascript-jquery/thumb.jpg) center / cover"
            }}
          >
            Javascript/jQuery project #3
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* PROJECT 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/71627141/original/0a3e1bc516bc4f9d3ffa944010d7ad327cb5303a/fix-jquery-ajax-issues.jpg) center / cover"
            }}
          >
            Ajax project project #1
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* PROJECT 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/71627141/original/0a3e1bc516bc4f9d3ffa944010d7ad327cb5303a/fix-jquery-ajax-issues.jpg) center / cover"
            }}
          >
            Ajax project project #2
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/71627141/original/0a3e1bc516bc4f9d3ffa944010d7ad327cb5303a/fix-jquery-ajax-issues.jpg) center / cover"
            }}
          >
           Ajax project #3
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* PROJECT 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://servoy.com/wp-content/uploads/icon-bootstrap.png) center / cover"
            }}
          >
            Bootstrap project #1
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* PROJECT 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://servoy.com/wp-content/uploads/icon-bootstrap.png) center / cover"
            }}
          >
           Bootstrap project #2
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://servoy.com/wp-content/uploads/icon-bootstrap.png) center / cover"
            }}
          >
            Bootstrap project #3
          </CardTitle>
          <CardText>
            Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Heroku</Button>
            <Button colored>Live-Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Javascript/jQuery</Tab>
          <Tab>JS with API's</Tab>
          <Tab>Bootstrap</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        {/* {this.toggleCategories()} */}
      </div>
    );
  }
}

export default Projects;
