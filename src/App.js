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
        to="/">Brian Madeira</Link>} scroll>
            <Navigation>
              <Link to="/">
                <i className="fas fa-home homeIcon" />
              </Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link onClick={close} style={{textDecoration: 'none', color: 'black'}}
        to="/">Brian Madeira</Link>}>
            <Navigation>
              
              <Link to="/aboutme" onClick={close}>
                About Me
              </Link>
              <Link to="/resume" onClick={close}>
                Resume
              </Link>
              <Link to="/projects" onClick={close}>
                Projects
              </Link>
              <Link to="/contact" onClick={close}>
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
