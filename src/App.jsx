import { Component, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Navigation from './Sections/Navigation/Navigation';
import HomePage from './Pages/HomePage'
import FlavorsPage from './Pages/FlavorsPage';
import CateringPage from './Pages/CateringPage';
import LocationsPage from './Pages/LocationsPage';
import CareersPage from './Pages/CareersPage';

import './App2.css'


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       "menuActive": false
//     }
//   }

//   toggleMenu = () => {
//     this.setState(prevState => ({
//       ...this.state,
//       "menuActive": !prevState.menuActive
//     }))
//   }

const App = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation toggleMenu={toggleMenu} menuActive={menuActive} />}>
          <Route index element={<HomePage />} />
          <Route path='flavors' element={<FlavorsPage />} />
          <Route path='catering' element={<CateringPage />} />
          <Route path='locations' element={<LocationsPage />} />
          <Route path='careers' element={<CareersPage />} />
        </Route>
      </Routes>
    </>
  )
}
// }

export default App;
