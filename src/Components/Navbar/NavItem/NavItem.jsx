import { NavLink } from "react-router-dom";

const NavItem = ({ link = '/', linkText, toggleMenu, menuActive }) => {
    return (
        <NavLink to={link}
            end
            // onClick={toggleMenu}
        >
            {({ isActive }) => (
                <span className={isActive 
                    ? "active-link relative text-base font-medium font-robo hover-underline-animation left" 
                    : "relative text-base font-medium font-robo hover-underline-animation left"}
                    onClick={toggleMenu}
                >
                    {linkText}
                </span>
            )}
        </NavLink>
    )
};

export default NavItem;
