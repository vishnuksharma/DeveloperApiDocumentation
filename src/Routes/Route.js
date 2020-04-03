import React from 'react';
import { Router, Redirect } from '@reach/router'
import '../index.css';
import '../index.css';
import App from '../App';
import routes from "./routes"
import LandingPage from '../Landing/LandingPage';
import APIIntro from '../Intro/Intro';
import APIComponent from '../Intro/APIComponent';
import GuideComponent from '../Guide/Guide.component';
import ReferenceComponent from '../Reference/Reference.component';

const Route = props => {
  return (
    <Router>
    <Redirect from="/" to={`${routes.ENTRY}${routes.LANDING}`} noThrow />
    <App path={routes.ENTRY}>
      <LandingPage path={routes.LANDING} />
      <APIComponent path={routes.API_PATH}>
        <APIIntro path={routes.INTRO} />
        <GuideComponent path={routes.GUIDE} />
        <ReferenceComponent path={routes.REFERENCE} />
      </APIComponent>

    </App>
  </Router>
  )
}

export default Route;