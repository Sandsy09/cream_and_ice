import { Component } from 'react'
import { Routes, Route } from 'react-router';

import HomePage from './Pages/HomePage'
import FlavorsPage from './Pages/FlavorsPage';
import CateringPage from './Pages/CateringPage';
import LocationsPage from './Pages/LocationsPage';
import CareersPage from './Pages/CareersPage';

import './App2.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      "menuToggle": false
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      ...this.state,
      "menuToggle": !prevState.menuToggle
    }))
  }

  render() {
    return (
      <Routes>
        <Route path='/cream_and_ice' element={<HomePage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
        <Route exact path='/cream_and_ice/flavors' element={<FlavorsPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
        <Route exact path='/cream_and_ice/catering' element={<CateringPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
        <Route exact path='/cream_and_ice/locations' element={<LocationsPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
        <Route exact path='/cream_and_ice/careers' element={<CareersPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
      </Routes>
    )
  }
}

export default App;
