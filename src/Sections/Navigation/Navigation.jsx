import Navbar from "../../Components/Navbar/Navbar";
import MobileNav from "../../Components/MobileNav/MobileNav";
import { Outlet } from "react-router-dom";

const Navigation = ({ toggleMenu, menuActive }) => {
    return (
        <>
            <header className='sticky top-0 left-0 bg-white z-50 shadow-md py-3 px-5 md:px-8'>
                <div className="container mx-auto px-8">
                    <Navbar toggleMenu={toggleMenu} menuActive={menuActive} />
                </div>
                <MobileNav toggleMenu={toggleMenu} menuActive={menuActive} />
            </header>
            <Outlet />
        </>

    )
};

export default Navigation;
