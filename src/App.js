import React, {Component} from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Appointments from './Pages/Appointments';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
class App extends Component {
  render() {
  return (
    <div className="App">
        <h1>App</h1>
        <Home />
        <About />
        <Appointments />
        <Login />
        <Profile />
        <Register />
    </div>
  )};
}

export default App;
