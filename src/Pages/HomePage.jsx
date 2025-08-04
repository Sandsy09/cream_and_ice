import ProductModal from '../Components/Modal/ProductModal/ProductModal'
import ProductModalContent from '../Components/Modal/ProductModal/ProductModalContent'
import BannerCarousel from '../Components/BannerCarousel/BannerCarousel'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import Story from '../Sections/Story/Story'
import Product from '../Sections/Product/Product'
import Location from '../Sections/Location/Location'
import Reviews from '../Sections/Reviews/Reviews'
import Careers from '../Sections/Careers/Careers'
import Footer from '../Sections/Footer/Footer'

// import storyPhoto from '../assets/ice-cream-cones.jpg'

const storyPhoto = 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649849/cream_and_ice/ice-cream-cones_wlkq2u.jpg'

// { products, filteredProducts, selectCategory, productModalOpen, toggleProductModal, getProductModalContent }
const HomePage = () => {
    
    return (
        <>
            {/* { productModalOpen && 
                <ProductModal 
                    productModalOpen={productModalOpen} 
                    toggleProductModal={toggleProductModal}
                />
                    //<ProductModalContent productModalOpen={productModalOpen} toggleProductModal={toggleProductModal} />
                //</ProductModal>
            } */}
            <main className='page-fade-in'>
                <HomeBanner />
                <BannerCarousel />
                <Story storyPhoto={storyPhoto} />
                <Product 
                    // toggleProductModal={toggleProductModal}
                    // getProductModalContent={getProductModalContent}
                />
                <Location />
                <Reviews />
                <Careers />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;