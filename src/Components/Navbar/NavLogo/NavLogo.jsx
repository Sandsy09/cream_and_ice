import { NavLink } from "react-router-dom";

const NavLogo = ({ logo, brand, tagline, tagColor, brandColor }) => {
    return (
        <NavLink to="/" id="nav-logo" className='flex items-center'>
            <div className="flex items-center">
                <img className="h-12 w-12 mr-3" src={logo} alt="Ice Cream Logo" />
                <div id="nav-logo-text" className="relative z-10">
                    <span className={`font-cursive ${brandColor} font-bold text-3xl md:text-4xl`}>{brand}</span>
                    <span className={`block text-xs font-robo ${tagColor} tracking-wider mt-[-0.25rem]`}>{tagline}</span>
                </div>
            </div>
        </NavLink>
    )
};

export default NavLogo;