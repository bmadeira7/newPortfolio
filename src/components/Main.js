import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';


const Main = () => (
    <Switch>
        <Route exact path="/portfolio/" component={LandingPage} />
        <Route path="/portfolio/aboutme" component={AboutMe} />
        <Route path="/portfolio/contact" component={Contact} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/resume" component={Resume} />

    </Switch>
)

export default Main;