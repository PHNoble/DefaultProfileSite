import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/screen';
import { Provider } from "react-redux";
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faToolbox, faCoffee, faHome, faEnvelope, faPhone, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { getUserPublicData } from './api/github';
library.add(faStroopwafel, faToolbox, faCoffee, faHome, faEnvelope, faPhone, faGlobe)

class App extends Component {
  render() {
    getUserPublicData('PHNoble');
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
