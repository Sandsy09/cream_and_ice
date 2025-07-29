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
  const [menuActive, setMenuActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(productData)
    setFilteredProducts(productData.filter((product) =>
      product.category.toLowerCase().includes("rich & induldgent")
    ))
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  };

  const handleProductCategorySelection = (event) => {
    event.preventDefault()
    const selectedCategory = event.target.textContent.toLowerCase();
    const newFilteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(selectedCategory)
    );

    setFilteredProducts(newFilteredProducts);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation toggleMenu={toggleMenu} menuActive={menuActive} />}>
          <Route index element={<HomePage products={products} filteredProducts={filteredProducts} selectCategory={handleProductCategorySelection}/>} />
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
