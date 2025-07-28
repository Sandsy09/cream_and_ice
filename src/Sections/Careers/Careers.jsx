import { Link } from "react-router-dom";

const Careers = () => {
    return (
        <section id="section-careers" className="bg-(--ice-teal) text-white font-robo py-12 px-6">
            <div className="container text-center mx-auto max-w-3xl">
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-(--ice-yellow) p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-(--ice-teal)">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                </div>
                <h2 className="font-cursive font-bold text-4xl md:text-5xl mb-6">Now Hiring</h2>
                <p className="font-robo font-medium text-xl text-white/80 max-w-2xl mx-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium, porro, itaque saepe vel nihil voluptas facilis amet, molestiae officia totam.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <div className="bg-(--ice-yellow) py-2 px-6 rounded-full">
                        <span className="font-robo font-medium">🎉 Apply Today!</span>
                    </div>
                    <Link to='/careers'>
                        <button className="inline-flex justify-center items-center gap-2 font-robo font-medium px-4 bg-transparent text-white py-2 px-5 md:px-7 rounded-lg cursor-pointer hover:bg-white border-2 border-white hover:border-(--ice-teal) hover:text-(--ice-teal) transition-color duration-250 group">
                            Get Application
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
                <p className="font-robo font-medium text-white/35">Competitive pay • Flexible schedules • Great team environment</p>
            </div>
        </section>
    )
};

export default Careers;