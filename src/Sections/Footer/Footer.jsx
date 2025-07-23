import NavLogo from "../../Components/Navbar/NavLogo/NavLogo";

import logo from '../../assets/ice-cream.png'

const Footer = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 pb-3 gap-10">
                <div className="flex flex-col items-center md:items-start">
                    <NavLogo 
                        logo={logo}
                        tagline='LUXURY ICE CREAM'
                        tagColor={'--ice-yellow'}
                        brand='Cream & Ice'
                        brandColor='--ice-white'
                    />
                    <p className="text-white/75 text-sm max-w-sm md:text-start mt-3 md:mt-4">Handcrafted Italian ice made with love in London. Family-owned and dedicated to bringing you the freshest, most unique flavors ever.</p>
                    <div className="flex flex-start gap-8 mt-4 md:mt-5">
                        <a href="/cream_and_ice/">
                            <svg className='text-white hover:text-(--ice-yellow)' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                        <a href="/cream_and_ice/">
                            <svg className='text-white hover:text-(--ice-yellow)' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </a>
                        <a href="/cream_and_ice/">
                            <svg className='text-white hover:text-(--ice-yellow)' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                            </svg>
                        </a>
                        <a href="/cream_and_ice/">
                            <svg className='text-white hover:text-(--ice-yellow)' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                                <path d="m10 15 5-3-5-3z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-robo text-xl font-medium mb-4 md:mb-5">Our Flagship Store</h3>
                    <div className="flex flex-col items-center md:items-start mb-2 md:mb-4">
                        <div className="flex space-x-2 items-start mb-2">
                            <svg className="text-white mr-2" fill="none" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C 9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <p className="text-white/75 font-robo text-sm md:text-md">37-41 Mortimer St, London W1T 3JH</p>
                        </div>
                        <div className="flex space-x-2 items-start mb-2">
                            <svg className="text-white mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                            </svg>
                            <p className="text-white/75 font-robo text-sm md:text-md">(+44) 020 7551 1557</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start mt-1">
                            <p className="text-sm md:text-md text-white/75">Mon-Fri: 12pm - 9pm</p>
                            <p className="text-sm md:text-md text-white/75">Saturday: 12pm - 11pm</p>
                            <p className="text-sm md:text-md text-white/75">Sunday: Closed</p>
                        </div>
                        <div className="mt-4">
                            <a href="/cream_and_ice/locations">
                                <button className="inline-flex justify-center items-center border border-white rounded-lg py-1 md:py-2 px-4 md:px-6 mb-3 md:mb-4 text-white text-sm md:text-md font-medium bg-transparent hover:bg-(--ice-yellow) hover:text-black ease-in duration-200 cursor-pointer"
                                >Get Directions</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <hr className="text-white/25"/>
                <div className="flex flex-col items-center md:flex-row justify-between px-6 mt-3 md:mt-4 text-white/50">
                    <p className="text-center md:text-left mb-2 md:mb-[0]">&copy; 2025 Cream and Ice Ltd. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <a className='hover:text-white transition-colors duration-300' href="/cream_and_ice">Home</a>
                        <a className='hover:text-white transition-colors duration-300' href="/cream_and_ice/flavors">Flavors</a>
                        <a className='hover:text-white transition-colors duration-300' href="/cream_and_ice/catering">Catering</a>
                        <a className='hover:text-white transition-colors duration-300' href="/cream_and_ice/locations">Locations</a>
                        <a className='hover:text-white transition-colors duration-300' href="/cream_and_ice/careers">Careers</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;