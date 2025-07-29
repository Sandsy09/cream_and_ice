// import sohoShop from '../../assets/sohoShop.jpg'
// import boroughShop from '../../assets/boroughShop.jpg'
import { NavLink } from "react-router-dom";
import LocationCard from "../../Components/LocationCard/LocationCard";

const sohoShop = 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649849/cream_and_ice/sohoShop_emkppi.jpg'
const boroughShop = 'https://res.cloudinary.com/dxadixl1i/image/upload/v1753649849/cream_and_ice/boroughShop_nmb2jp.jpg'

const sohoOpening = [
    "Mon-Fri: 12pm - 9pm",
    "Saturday: 12pm - 11pm",
    "Sunday: Closed"
]

const boroughOpening = [
    "Mon-Fri: 10am - 5pm",
    "Saturday: 10am - 7pm",
    "Sunday: 10am - 4pm"
]

const Location = () => {
    return (
        <section id="section-location" className="py-24 px-6 relative overflow-hidden bg-(--ice-teal)">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block bg-white/15 text-white py-1 px-4 rounded-full mb-4 md:mb-6">Come See Us</span>
                    <h2 className="font-robo text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
                        <span className="font-cursive">
                            Visit
                        </span> Cream & Ice
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">Come down to one of our beautiful locations and get the ice-cream that you have been craving!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <LocationCard 
                        heading={"Soho"}
                        shopImage={sohoShop}
                        shopName={"Soho Scoops"}
                        shopAddress={"37-41 Mortimer St, London W1T 3JH"}
                        openTimes={sohoOpening}
                    />
                    <LocationCard 
                        heading={"Borough Market"}
                        shopImage={boroughShop}
                        shopName={"Borough Scoops"}
                        shopAddress={"Borough Market, Cathedral St, London SE1 9DE"}
                        openTimes={boroughOpening}
                    />
                </div>
                <div className="text-center mt-12">
                    <NavLink to="/locations">
                    <button className='inline-flex gap-2 items-center justify-center mx-auto space-between font-robo font-medium bg-(--ice-yellow) text-(--ice-teal) py-2 px-5 md:px-7 rounded-lg cursor-pointer hover:bg-(--ice-teal) border-2 border-transparent hover:border-(--ice-yellow) hover:text-(--ice-yellow) transition-color duration-250'>
                        <span>Come vistit us!</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
};

export default Location;