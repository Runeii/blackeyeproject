import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { initSimpleImg } from 'react-simple-img'
import './style.scss'

import Home from 'views/Home'
import Projects from 'views/Projects'
import Project from 'views/Project'
import Agency from 'views/Agency'
import Services from 'views/Services'
import Header from 'components/Header'
import Footer from 'components/Footer'

initSimpleImg()

ReactDOM.render(
      <Router>
        <div id='app'>
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:slug" component={Project} />
            <Route path="/agency" component={Agency} />
            <Route path="/services" component={Services} />
          <Footer />
        </div>
      </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
