import NavLogo from './NavLogo/NavLogo';
import NavItem from './NavItem/NavItem';

import logo from '../../assets/ice-cream.png'



function Navbar({ toggleMenu, menuActive }) {
    const toggleClass = menuActive ? 'hamburger-active' : ''

    return (
        <nav className='flex justify-between items-center min-w-[150px]'>
            <NavLogo
                logo={logo}
                brand='Cream & Ice'
                brandColor={'text-(--ice-teal)'}
                tagline='LUXURY ICE CREAM'
                tagColor={'text-(--ice-red)'}
            />
            <div id='screen-nav' className='flex item-center space-x-8'>
                <NavItem
                    linkText='Home'
                />
                <NavItem
                    link='/flavors'
                    linkText='Flavors'
                />
                <NavItem
                    link='/catering'
                    linkText='Catering'
                />
                <NavItem
                    link='/locations'
                    linkText='Locations'
                />
                <NavItem
                    link='/careers'
                    linkText='Careers'
                />
            </div>
            <div
                className={`hamburger z-500 bg-white ${toggleClass}`}
                onClick={toggleMenu}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    )
};

//  <a href="https://www.flaticon.com/free-stickers/ice-cream" title="ice cream stickers">Ice cream stickers created by Gohsantosadrive - Flaticon</a>

export default Navbar;