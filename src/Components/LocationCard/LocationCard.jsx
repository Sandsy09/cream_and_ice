const LocationCard = ({ heading, shopImage, shopName, shopAddress, openTimes }) => {
    return (
        <div className="container p-4 md:p-6 bg-white/10 shadow-xl rounded-xl border border-white/20 hover-lift">
            <div className="flex items-center mb-2 md:mb-4">
                <svg className="text-ice-yellow mr-2" fill="none" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C 9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h2 className="text-white font-robo font-bold text-xl md:text-2xl">{heading}</h2>
            </div>
            <div className="overflow-hidden rounded-lg mb-2 md:mb-4">
                <img className="w-full h-full object-cover hover:scale-110 duration-500" src={shopImage} style={{ aspectRatio: "16/9" }} alt="Shop Image" />
            </div>
            <div className="bg-white/10 rounded-lg font-robo p-3 md:p-4 mb-3 md:mb-4">
                <h3 className="font-medium text-white mb-2 text-lg md:text-xl">{shopName}</h3>
                <p className="mb-2 text-white/60">{shopAddress}</p>
                {
                    openTimes.map((openTime, i) => {
                        return (
                            <p
                                key={`${heading}-openTime-${i}`}
                                className="text-white/60"
                            >
                                {openTime}
                            </p>
                        )
                    })
                }
            </div>
            <div className="text-center font-robo">
                <p className="text-white/60 text-sm md:text-md mb-4">Visit our stores today and try our delicious flavors!</p>
                <a href="/cream_and_ice/locations">
                    <button className="inline-flex justify-center items-center border border-white rounded-lg py-2 md:py-3 px-4 md:px-6 mb-3 md:mb-4 text-white text-sm md:text-md font-medium bg-transparent hover:bg-(--ice-yellow) hover:text-black ease-in duration-200 cursor-pointer"
                    >Get Directions</button>
                </a>
            </div>
        </div>
    )
};

export default LocationCard;