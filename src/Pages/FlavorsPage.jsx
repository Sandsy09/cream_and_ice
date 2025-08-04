import { useState, useEffect } from 'react';

import ProductModal from '../Components/Modal/ProductModal/ProductModal';
import ProductList from '../Components/ProductList/ProductList'
import Footer from "../Sections/Footer/Footer";

import productData from '../../seeds/products';

const FlavorsPage = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterCategory, setFilterCategory] = useState("All Flavors")
    const [productModalOpen, setProductModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setProducts(productData)
        setFilteredProducts(productData)
    }, [])

    const categories = ["All Flavors", ...Array.from(new Set(products.map(p => p.category)))];

    const handleCategorySelection = (event) => {
        const selectedCategory = event.target.textContent
        const newFilteredProducts = products.filter((product) => selectedCategory === "All Flavors" || product.category === selectedCategory)

        setFilteredProducts(newFilteredProducts)
        setFilterCategory(selectedCategory)
    }

    const handleProductClick = (productId) => {
        document.body.style.overflow = "hidden"
        const newSelectedproduct = products.filter((product) => product.id === productId)
        console.log(newSelectedproduct)
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
            <div className="px-16 py-12 lg:px-24 lg:py-16 xl:px-48 xl:py-24">
                <div className="container mx-auto max-w-8xl">
                    <div className="text-center mb-12">
                        <h2 className='text-3xl md:text-5xl font-robo font-bold mb-4'>Our <span className='font-cursive text-ice-teal'>Frozen</span> Flavors</h2>
                        <p className='text-content text-lg text-center max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod id eveniet tempora, odio delectus.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center mb-12 font-robo font-medium">
                        {
                            categories.map((category, idx) => {
                                if (filterCategory === category) {
                                    return (
                                        <button name="flavor-page-selector" onClick={handleCategorySelection} key={`category-button-${idx}`} className="bg-(--ice-teal) text-white rounded-full px-4 py-2 shadow-lg cursor-pointer">{category}</button>
                                    )
                                } else {
                                    return (
                                        <button name="flavor-page-selector" onClick={handleCategorySelection} key={`category-button-${idx}`} className="bg-white text-(--ice-teal) rounded-full px-4 py-2 shadow-lg cursor-pointer border-2 hover:bg-(--ice-teal)/30 hover:border-(--ice-teal)/30 transition-color duration-250">{category}</button>
                                    )
                                }
                            })
                        }
                    </div>
                    <ProductList handleProductClick={handleProductClick} products={filteredProducts} gridCols={4} />
                </div>
            </div>
            <Footer />
        </>
    )
};

export default FlavorsPage;