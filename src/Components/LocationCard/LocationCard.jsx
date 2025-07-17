const LocationCard = ({ heading, shopImage }) => {
    return (
        <div className="container p-4 md:p-6 bg-white/10 shadow-xl rounded-xl border border-white/20 hover-lift">
            <div className="flex items-center mb-2 md:mb-4">
                <svg className="text-ice-yellow mr-2" fill="none" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C 9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h2 className="text-white font-robo font-bold text-xl md:text-2xl">{heading}</h2>
            </div>
            <div className="overflow-hidden rounded-lg mb-2 md:mb-4">
                <img className="w-full h-full object-cover hover:scale-110 duration-500" src={shopImage} style={{ aspectRatio: "16/9" }} alt="Shop Image" />
            </div>
            <div className="">
                Heyy
            </div>
            <div className="">
                Heyy
            </div>
            <div className="">
                Heyy
            </div>
            <div className="">
                Heyy
            </div>
        </div>
    )
};

export default LocationCard;