import NavItem from "../Navbar/NavItem/NavItem";

const MobileNav = ({ menuActive }) => {
    const toggleClass = menuActive ? '' : 'translate-x-full'

    return (
        <div id='mobile-nav' className={`fixed z-100 h-full bg-white text-black pt-20 inset-0 md:hidden transition-transform duration-900 ease-in-out ${toggleClass}`}>
            <div className="flex flex-col mx-auto items-center justify-center gap-10 mt-20">
                <NavItem
                    linkText='Home'
                />
                <NavItem
                    link='flavors'
                    linkText='Flavors'
                />
                <NavItem
                    link='catering'
                    linkText='Catering'
                />
                <NavItem
                    link='locations'
                    linkText='Locations'
                />
                <NavItem
                    link='careers'
                    linkText='Careers'
                />
            </div>
        </div>
    )
}

export default MobileNav;