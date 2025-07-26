import { NavLink } from "react-router-dom";

const NavItem = ({ link = '/', linkText }) => {
    return (
        <NavLink to={`${link}`}
            end
        >
            {({ isActive }) => (
                <span className={isActive 
                    ? "active-link relative text-base font-medium font-robo hover-underline-animation left" 
                    : "relative text-base font-medium font-robo hover-underline-animation left"}
                >
                    {linkText}
                </span>
            )}
        </NavLink>
    )
};

export default NavItem;
