import banner from '../../assets/ice-cream-banner.jpg'

const HomeBanner = () => {
    return (
        <section id='section-banner' className='relative h-screen w-full flex justify-center items-center overflow-hidden'>
            <div className="absolute inset-0">
                <img className='w-full h-full object-cover object-center' src={banner} alt="Home Banner Photo" />
            </div>
        </section>
    )
};

export default HomeBanner;