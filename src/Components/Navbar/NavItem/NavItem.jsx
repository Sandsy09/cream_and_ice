const NavItem = ({ link = '/', linkText }) => {
    return (
        <a className='relative text-base font-medium font-robo hover-underline-animation left' 
            href={link}
        >
            {linkText}
        </a>
    )
};

export default NavItem;
