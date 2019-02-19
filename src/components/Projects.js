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
  // IconButton
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
          {/* NEWEST PROJECT 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover"
              }}
            >
              Bike Shop ECommerce Webstore 
            </CardTitle>
            <CardText>
              A responsive webstore with functioning cart and paypal checkout. Built with React and Bootstrap
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bmadeira7/storeFront" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://bike-webstore.netlify.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              
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
              Fala Mobile Messaging App
            </CardTitle>
            <CardText>
              A responsive messaging service built with React, Bootstrap, and Pusher Chatkit
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bmadeira7/falaChat" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://shrouded-island-48843.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              
            </CardMenu>
          </Card>

          {/* PROJECT 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover"
              }}
            >
              UK Garage Click Game
            </CardTitle>
            <CardText>
              My first React project
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bmadeira7/clickGame" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://bmadeira7.github.io/clickGame/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              
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
            Friend Finder App
          </CardTitle>
          <CardText>
          An application that will recommend you a new friend based on quiz results
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/bmadeira7/friendFinder" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://bmadeira7-friend-finder.herokuapp.com" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            
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
            Train Scheduler App
          </CardTitle>
          <CardText>
          An mock application allow the transportation management to schedule train routes
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/bmadeira7/Train-Scheduler" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://bmadeira7.github.io/Train-Scheduler/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            
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
            Javascript Hangman Game
          </CardTitle>
          <CardText>
          A hangman guessing game built with Javascript with a Vietnam War theme
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/bmadeira7/js-review" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://bmadeira7.github.io/js-review/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            
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
              "url(https://static.frontendmasters.com/assets/courses/2012-02-12-introduction-to-javascript-jquery/thumb.jpg) center / cover"
            }}
          >
            Resort Me
          </CardTitle>
          <CardText>
            An application that assists the user in locating ski resorts based on input
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/bmadeira7/Project-2" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="http://bloodcurdling-vampire-87131.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            
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
           Face The Music
          </CardTitle>
          <CardText>
         Application that recognizes faces and emotion and recommends music from YouTube based on periceved emotion
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/bmadeira7/Project-1" rel="noopener noreferrer" target="_blank">Github</a></Button>
              <Button colored style={{float: 'right'}}><a href="https://bmadeira7.github.io/Project-1/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{ color: "fff" }}>
            
          </CardMenu>
        </Card>

        
      </div>
      );
    // } else if (this.state.activeTab === 3) {
    //   return (
    //     <div className="projects-grid">
    //     {/* PROJECT 1 */}
    //     <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
    //       <CardTitle
    //         style={{
    //           color: "black",
    //           height: "176px",
    //           background:
    //             "url(https://servoy.com/wp-content/uploads/icon-bootstrap.png) center / cover"
    //         }}
    //       >
    //         Bootstrap project #1
    //       </CardTitle>
    //       <CardText>
    //         Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
    //       </CardText>
    //       <CardActions border>
    //         <Button colored>GitHub</Button>
    //         <Button colored>Heroku</Button>
    //         <Button colored>Live-Demo</Button>
    //       </CardActions>
    //       <CardMenu style={{ color: "fff" }}>
            
    //       </CardMenu>
    //     </Card>

    //     {/* PROJECT 2 */}
    //     <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
    //       <CardTitle
    //         style={{
    //           color: "black",
    //           height: "176px",
    //           background:
    //             "url(https://servoy.com/wp-content/uploads/icon-bootstrap.png) center / cover"
    //         }}
    //       >
    //        Bootstrap project #2
    //       </CardTitle>
    //       <CardText>
    //         Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
    //       </CardText>
    //       <CardActions border>
    //         <Button colored>GitHub</Button>
    //         <Button colored>Heroku</Button>
    //         <Button colored>Live-Demo</Button>
    //       </CardActions>
    //       <CardMenu style={{ color: "fff" }}>
            
    //       </CardMenu>
    //     </Card>

    //     {/* Project 3 */}
    //     <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
    //       <CardTitle
    //         style={{
    //           color: "black",
    //           height: "176px",
    //           background:
    //             "url(https://servoy.com/wp-content/uploads/icon-bootstrap.png) center / cover"
    //         }}
    //       >
    //         Bootstrap project #3
    //       </CardTitle>
    //       <CardText>
    //         Lorem ipums shf sfshf sfs afsd g fgd d dfh dh dfh gf jf jfg jfh j
    //       </CardText>
    //       <CardActions border>
    //         <Button colored>GitHub</Button>
    //         <Button colored>Heroku</Button>
    //         <Button colored>Live-Demo</Button>
    //       </CardActions>
    //       <CardMenu style={{ color: "fff" }}>
            
    //       </CardMenu>
    //     </Card>
    //   </div>
    //   );
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
          <Tab>Using AJAX</Tab>
          {/* <Tab>Bootstrap</Tab> */}
        </Tabs>

        <Grid className="project-grid-main">
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
