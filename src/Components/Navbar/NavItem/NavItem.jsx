const NavItem = ({ link = '', linkText }) => {
    return (
        <a className='relative text-base font-medium font-robo hover-underline-animation left' 
            href={`/cream_and_ice/${link}`}
        >
            {linkText}
        </a>
    )
};

export default NavItem;
