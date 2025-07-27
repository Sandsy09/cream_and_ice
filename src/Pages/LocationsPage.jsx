import Navbar from '../Components/Navbar/Navbar'
import MobileNav from '../Components/MobileNav/MobileNav'

const LocationsPage = ({ toggleMenu, menuActive }) => {
    return (
        <>
            <header className='sticky top-0 left-0 bg-white z-50 shadow-md py-3 px-5 md:px-8'>
                <div className="container mx-auto px-8">
                    <Navbar toggleMenu={toggleMenu} menuActive={menuActive} />
                </div>
                <MobileNav menuActive={menuActive} toggleMenu={toggleMenu} />
            </header>
            <div className="h-screen w-full bg-black flex justify-center items-center">
                <h1 className="text-5xl text-white">Locations Page</h1>
            </div>
        </>
    )
};

export default LocationsPage;