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


const HomePage = ({ products, filteredProducts, selectCategory }) => {
    return (
        <>
            <main className='page-fade-in'>
                <HomeBanner />
                <BannerCarousel />
                <Story storyPhoto={storyPhoto} />
                <Product products={products} filteredProducts={filteredProducts} selectCategory={selectCategory}/>
                <Location />
                <Reviews />
                <Careers />
            </main>
            <footer className='bg-(--ice-teal) text-white font-robo pt-12 pb-6'>
                <Footer />
            </footer>
        </>
    );
};

export default HomePage;