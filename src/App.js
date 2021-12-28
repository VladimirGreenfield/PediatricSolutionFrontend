import React, {Component} from 'react';
import {Route, Link, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
// import About from './Pages/About';
// import Appointments from './Pages/Appointments';
// import Login from './Pages/Login';
// import Profile from './Pages/Profile';
// import Register from './Pages/Register';
// import Contact from './Pages/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home /> 
      </div>
    )
  };
}

export default App;
