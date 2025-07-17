import NavLogo from './NavLogo/NavLogo';
import NavItem from './NavItem/NavItem';

import logo from '../../assets/ice-cream.png'

function Navbar() {
    return (
        <nav className='flex justify-between items-center'>
            <NavLogo
                logo={logo}
                brand='Cream & Ice'
                tagline='LUXURY ICE CREAM'
            />
            <div className='flex item-center space-x-8'>
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
        </nav>
    )
};

//  <a href="https://www.flaticon.com/free-stickers/ice-cream" title="ice cream stickers">Ice cream stickers created by Gohsantosadrive - Flaticon</a>

export default Navbar;