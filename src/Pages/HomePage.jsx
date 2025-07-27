import Navbar from '../Components/Navbar/Navbar'
import MobileNav from '../Components/MobileNav/MobileNav'
import BannerCarousel from '../Components/BannerCarousel/BannerCarousel'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Story from '../Sections/Story/Story'
import Product from '../Sections/Product/Product'
import Location from '../Sections/Location/Location'
import Reviews from '../Sections/Reviews/Reviews'
import Careers from '../Sections/Careers/Careers'
import Footer from '../Sections/Footer/Footer'

import storyPhoto from '../assets/ice-cream-cones.jpg'


const HomePage = ({ toggleMenu, menuActive }) => {
    return (
        <>
            <header className='sticky top-0 left-0 bg-white z-50 shadow-md py-3 px-5 md:px-8'>
                <div className="container mx-auto px-8">
                    <Navbar toggleMenu={toggleMenu} menuActive={menuActive} />
                </div>
                <MobileNav toggleMenu={toggleMenu} menuActive={menuActive} />
            </header>
            <main className='page-fade-in'>
                <HomeBanner />
                <BannerCarousel />
                <Story storyPhoto={storyPhoto} />
                <Product />
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