import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ProductList from '../../Components/ProductList/ProductList'
import ProductModal from '../../Components/Modal/ProductModal/ProductModal';

import productData from '../../../seeds/products';

const Product = () => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filterCategory, setFilterCategory] = useState("Rich & Induldgent")
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const initialProductLoad = productData.filter((product) => product.category === filterCategory);
    setProducts(productData)
    setFilteredProducts(initialProductLoad)
  }, [])

    // useEffect(() => {
    //   console.log(window.innerWidth)
    // }, [])
    
    // const shuffle = (arr) => {
    //   arr.sort(() => Math.random - 0.5);
    // }

    // const shuffledFilteredProducts = shuffle(filteredProducts)
    

  const categories = [...Array.from(new Set(products.map(p => p.category)))];

  const handleCategorySelection = (event) => {
    const selectedCategory = event.target.textContent
    const newFilteredProducts = products.filter((product) => product.category === selectedCategory)

    setFilteredProducts(newFilteredProducts)
    setFilterCategory(selectedCategory)
  };

  const handleProductClick = (productId) => {
    document.body.style.overflow = "hidden"
    const newSelectedproduct = products.filter((product) => product.id === productId)
    setProductModalOpen(true);
    setSelectedProduct(newSelectedproduct);
  }

  const handleModalClose = () => {
    document.body.style.overflow = "unset"
    setProductModalOpen(false);
    setSelectedProduct(null);
  }

  return (
    <>
      { productModalOpen && 
        <ProductModal 
            product={selectedProduct[0]}
            productModalOpen={productModalOpen} 
            handleModalClose={handleModalClose}
        />
      }
      <section className="py-24 px-6 relative overflow-hidden bg-(--ice-off-white)" id='section-products'>
        <div className="absolute bg-soft-red h-32 w-32 rounded-full -top-10 -left-10 z-0"></div>
        <div className="absolute bg-soft-yellow h-64 w-64 rounded-full -bottom-15 -right-15 z-0"></div>
        <div className='container mx-auto max-w-6xl'>
          <div className="text-center mb-12">
            <h2 className='text-3xl md:text-5xl font-robo font-bold mb-4'><span className='font-cursive text-ice-teal'>Frozen</span> Flavors</h2>
            <p className='text-content text-lg text-center max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod id eveniet tempora, odio delectus.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-12 font-robo font-medium">
            {
              categories.map((category, idx) => {
                if (filterCategory === category) {
                  return(
                    <button onClick={handleCategorySelection} key={`category-button-${idx}`} className="bg-(--ice-teal) text-white rounded-full px-4 py-2 shadow-lg cursor-pointer">{category}</button>
                  )
                } else {
                  return (
                    <button onClick={handleCategorySelection} key={`category-button-${idx}`} className="bg-white text-(--ice-teal) rounded-full px-4 py-2 shadow-lg cursor-pointer border-2 hover:bg-(--ice-teal)/30 hover:border-(--ice-teal)/30 transition-color duration-250">{category}</button>
                  )
                }
              })
            }
          </div>
          <ProductList handleProductClick={handleProductClick} products={filteredProducts} /> 
        </div>
        <div className="text-center mt-12">
          <NavLink to="/flavors">
            <button className='z-1 relative inline-flex gap-2 items-center justify-center mx-auto space-between font-robo font-medium bg-(--ice-teal) text-white py-2 px-5 md:px-7 rounded-lg cursor-pointer hover:bg-white border-2 border-transparent hover:border-(--ice-teal) hover:text-(--ice-teal) transition-color duration-250'>
              <span>View all our flavors</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </NavLink>
        </div>
      </section>
    </>
  )
};

export default Product;