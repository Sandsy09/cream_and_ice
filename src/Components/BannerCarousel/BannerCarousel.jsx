const descriptors = [
    "Exception Ingredients",
    "Fantastic Flavors",
    "Locally Sourced",
    "Fresh & Fun",
    "Moreish",
    "Delicious",
    "Visually Stunning",
    "Vegan Options",
    "Handcrafted Treats"
]

const BannerCarousel = () => {
    return (
        // <div className="relative flex overflow-x-hidden">
        //     <div className="w-full bg-teal text-5xl font-cursive text-white font-bold py-8 animate-marquee whitespace-nowrap">
        //         <span className="uppercase ">Exceptional</span>
        //     </div> text-lg md:text-2xl font-cursive text-white font-bold uppercase
        // </div>
        <div className="wrapper bg-teal">
            <div className="marquee py-8">
                <div className="marquee-group">
                    {
                        descriptors.map((desc, i) => {
                            return <span key={`descriptor-${i}`} className="text-lg md:text-2xl font-cursive text-white font-bold uppercase mx-6">{desc}</span>
                        })
                    }
                </div>

                <div aria-hidden="true" className="marquee-group">
                    {
                        descriptors.map((desc, i) => {
                            return <span key={`descriptor2-${i}`} className="text-lg md:text-2xl font-cursive text-white font-bold uppercase mx-6">{desc}</span>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;