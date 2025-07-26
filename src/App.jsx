import { Component } from 'react'
import { Routes, Route } from 'react-router-dom';

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
      <>
        <Routes>
          <Route exact path='/' element={<HomePage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
          <Route exact path='/flavors' element={<FlavorsPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
          <Route exact path='/catering' element={<CateringPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
          <Route exact path='/locations' element={<LocationsPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
          <Route exact path='/careers' element={<CareersPage toggleMenu={this.toggleMenu} menuToggle={this.state.menuToggle} />} />
        </Routes>
      </>
    )
  }
}

export default App;
