import NavItem from "../Navbar/NavItem/NavItem";

const MobileNav = ({ menuActive, toggleMenu }) => {
    const toggleClass = menuActive ? '' : 'translate-x-full'

    return (
        <div id='mobile-nav' className={`fixed z-100 h-full bg-white text-black pt-20 inset-0 md:hidden transition-transform duration-900 ease-in-out ${toggleClass}`}>
            <div className="flex flex-col mx-auto items-center justify-center gap-10 mt-20">
                <NavItem
                    linkText='Home'
                    toggleMenu={toggleMenu}
                    menuActive={menuActive}
                />
                <NavItem
                    link='/flavors'
                    linkText='Flavors'
                    toggleMenu={toggleMenu}
                    menuActive={menuActive}
                />
                <NavItem
                    link='/catering'
                    linkText='Catering'
                    toggleMenu={toggleMenu}
                    menuActive={menuActive}
                />
                <NavItem
                    link='/locations'
                    linkText='Locations'
                    toggleMenu={toggleMenu}
                    menuActive={menuActive}
                />
                <NavItem
                    link='/careers'
                    linkText='Careers'
                    toggleMenu={toggleMenu}
                    menuActive={menuActive}
                />
            </div>
        </div>
    )
}

export default MobileNav;