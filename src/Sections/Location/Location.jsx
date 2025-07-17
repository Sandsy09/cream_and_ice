import sohoShop from '../../assets/sohoShop.jpg'
import boroughShop from '../../assets/boroughShop.jpg'
import LocationCard from "../../Components/LocationCard/LocationCard";

const Location = () => {
    return (
        <section id="section-location" className="py-24 px-6 relative overflow-hidden bg-teal">
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
                    />
                    <LocationCard 
                        heading={"Borough Market"}
                        shopImage={boroughShop}
                    />
                </div>
                <div className="flex">

                </div>
            </div>
        </section>
    )
};

export default Location;