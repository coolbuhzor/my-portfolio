import React from 'react';
/* i downloaded react router dom to enable me switch throuh links. the switch and route are from react router */
import { Switch , Route } from 'react-router-dom';

import landingPage from './landingPage';
import aboutMe from './aboutMe';
import contact from './contact'
import project from './project'
import resume from './resume'

const Main = () => (
    <Switch>
    <Route exact path = "/" component= {landingPage} />
    <Route path = "/aboutMe" component= {aboutMe} />
    <Route path = "/contact" component= {contact} />
    <Route path = "/project" component= {project} />
    <Route path = "/resume" component= {resume} />

    </Switch>
)

export default Main;