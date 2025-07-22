const NavLogo = ({ logo, brand, tagline }) => {
    return (
        <a href="/" id="nav-logo" className='flex items-center'>
            <div className="flex items-center">
                <img className="h-12 w-12 mr-3" src={logo} alt="Ice Cream Logo" />
                <div id="nav-logo-text" className="relative z-10">
                    <span className="font-cursive text-ice-teal font-bold text-3xl md:text-4xl">{brand}</span>
                    <span className="block text-xs font-robo text-ice-red tracking-wider mt-[-0.25rem]">{tagline}</span>
                </div>
            </div>
        </a>
    )
};

export default NavLogo;