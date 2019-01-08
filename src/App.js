import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";

// method to get the Drawer to hide on click.
function close() {
  var d = document.querySelector(".mdl-layout");
  d.MaterialLayout.toggleDrawer();
}

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
        to="/portfolio/">Brian Madeira</Link>} scroll>
            <Navigation>
              <Link to="/portfolio/">
                <i className="fas fa-home homeIcon" />
              </Link>
              <Link to="/portfolio/aboutme">About Me</Link>
              <Link to="/portfolio/resume">Resume</Link>
              <Link to="/portfolio/projects">Projects</Link>
              <Link to="/portfolio/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link onClick={close} style={{textDecoration: 'none', color: 'black'}}
        to="/portfolio/">Brian Madeira</Link>}>
            <Navigation>
              
              <Link to="/portfolio/aboutme" onClick={close}>
                About Me
              </Link>
              <Link to="/portfolio/resume" onClick={close}>
                Resume
              </Link>
              <Link to="/portfolio/projects" onClick={close}>
                Projects
              </Link>
              <Link to="/portfolio/contact" onClick={close}>
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
