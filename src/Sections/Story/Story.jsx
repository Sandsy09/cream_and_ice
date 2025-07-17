const Story = ({ storyPhoto }) => {
    return (
        <section className='py-24 px-6 relative overflow-hidden bg-white' id='section-story'>
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative z-10 shadow-2xl rounded-2xl overflow-hidden">
                            <img className="w-full h-auto" src={storyPhoto} alt="Ice Cream Cones" />
                        </div>
                        <div className="absolute bg-soft-red h-32 w-32 rounded-full -top-10 -left-10 z-0"></div>
                        <div className="absolute bg-soft-yellow h-64 w-64 rounded-full -bottom-15 -right-15 z-0"></div>
                    </div>
                    <div className="lg:pl-10">
                        <span className='inline-block mb-8 bg-soft-red text-ice-red py-2 px-6 rounded-full font-bold text-sm'>Our Story</span>
                        <h2 className='text-3xl lg:text-4xl font-bold mb-6'>From humble beginnings to the 
                            <span className="font-cursive text-ice-teal">Community's Favourite</span>
                        </h2>
                        <p className='text-content mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum, corporis, voluptatum porro eum error laboriosam cumque maiores reprehenderit ducimus dolor. Labore a beatae nemo reprehenderit nihil mollitia non id?</p>
                        <p className='text-content mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aspernatur. Fugit similique enim, quod ullam magni, repellendus, itaque natus sit quis iusto modi atque hic architecto molestiae facilis. Dignissimos, corporis?</p>
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-ice-grey p-4 rounded-lg text-center font-robo">
                                <h3 className="text-ice-teal font-bold text-3xl">5+</h3>
                                <p className="text-sm text-content">Flavors</p>
                            </div>
                            <div className="bg-ice-grey p-4 rounded-lg text-center font-robo">
                                <h3 className="text-ice-yellow font-bold text-3xl">3</h3>
                                <p className="text-sm text-content">Locations</p>
                            </div>
                            <div className="bg-ice-grey p-4 rounded-lg text-center font-robo">
                                <h3 className="text-ice-red font-bold text-3xl">1000s</h3>
                                <p className="text-sm text-content">Happy Customers</p>
                            </div>
                        </div>
                        <a href="/">
                            <button className="bg-teal text-white py-2 px-8 rounded-lg font-robo text-md">Vist Us Today</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;