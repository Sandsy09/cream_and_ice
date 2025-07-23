import Navbar from '../Components/Navbar/Navbar'
import MobileNav from '../Components/MobileNav/MobileNav'

const CareersPage = ({ toggleMenu, menuToggle }) => {
    return (
        <>
            <header className='sticky top-0 left-0 bg-white z-50 shadow-md py-3 px-5 md:px-8'>
                <div className="container mx-auto px-8">
                    <Navbar toggleMenu={toggleMenu} menuActive={menuToggle} />
                </div>
                <MobileNav menuActive={menuToggle} />
            </header>
            <div className="h-screen w-full bg-black flex justify-center items-center">
                <h1 className="text-5xl text-white">Careers Page</h1>
            </div>
        </>
    )
};

export default CareersPage;