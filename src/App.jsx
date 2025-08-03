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
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProductsFlavorPage, setFilteredProductsFlavorPage] = useState([]);
  const [productModalOpen, setProductModalOpen] = useState(false);

  useEffect(() => {
    setProducts(productData)
    setFilteredProducts(productData.filter((product) =>
      product.category.toLowerCase().includes("rich & induldgent")
    ))
    setFilteredProductsFlavorPage(productData)
  }, []);

  const toggleProductModal = () => {
    setProductModalOpen(!productModalOpen)
  }

  const getProductModalContent = (event) => {
    console.log(event)
  }

  const handleProductCategorySelection = (event) => {
    event.preventDefault()
    const selectedCategory = event.target.textContent.toLowerCase();
    const selectedName = event.target.name.toLowerCase();

    if (selectedName === 'flavor-page-selector' && selectedCategory === "all flavors") {
      console.log("HIT ALLL")
      setFilteredProductsFlavorPage(products);

    } else if (selectedName === 'flavor-page-selector') {
      const newFilteredProducts = products.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory)
      );
      
      setFilteredProductsFlavorPage(newFilteredProducts);

    } else {
      const newFilteredProducts = products.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory)
      );
  
      setFilteredProducts(newFilteredProducts);

    }

  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={
            <HomePage
              products={products}
              filteredProducts={filteredProducts}
              selectCategory={handleProductCategorySelection}
              productModalOpen={productModalOpen}
              toggleProductModal={toggleProductModal}
              getProductModalContent={getProductModalContent}
            />
          } />
          <Route path='flavors' element={
            <FlavorsPage
              products={products}
              filteredProducts={filteredProductsFlavorPage}
              selectCategory={handleProductCategorySelection}
            />
          } />
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
