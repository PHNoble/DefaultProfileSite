import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/screen';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faToolbox, faCoffee, faHome, faEnvelope, faPhone, faStar, faGlobe, faTerminal, faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faToolbox, faCoffee, faHome, faEnvelope, faPhone, faGlobe, faStar, faTerminal, faBriefcase, faCalendarAlt)

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
