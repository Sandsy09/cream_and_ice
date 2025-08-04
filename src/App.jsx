import { Component, useEffect, useLayoutEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Navigation from './Sections/Navigation/Navigation';
import HomePage from './Pages/HomePage'
import FlavorsPage from './Pages/FlavorsPage';
import CateringPage from './Pages/CateringPage';
import LocationsPage from './Pages/LocationsPage';
import CareersPage from './Pages/CareersPage';

import productData from '../seeds/products';

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
  // const [productModalOpen, setProductModalOpen] = useState(false);

  // const toggleProductModal = () => {
  //   setProductModalOpen(!productModalOpen)
  // }

  // const getProductModalContent = (event) => {
  //   console.log(event)
  // }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={
            <HomePage
              // productModalOpen={productModalOpen}
              // toggleProductModal={toggleProductModal}
              // getProductModalContent={getProductModalContent}
            />
          } />
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
