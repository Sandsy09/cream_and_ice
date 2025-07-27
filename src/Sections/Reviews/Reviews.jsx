import ReviewCard from "../../Components/ReviewCard/ReviewCard";

import reviews from "../../../seeds/reviews"

const Reviews = () => {
    return (
        <section id="section-eviews" className="py-24 px-6 bg-(--ice-off-white)">
            <div className="container text-center mx-auto">
                <div className="font-robo text-center mb-12">
                    <span className="font-medium bg-(--ice-red)/10 px-3 py-2 rounded-full text-(--ice-red)">What Our Customers Say</span>
                    <h2 className="text-4xl md:text-5xl font-medium mt-4 md:mt-5"><span className="font-cursive text-(--ice-teal)">Customer</span> Reviews</h2>
                    <p className="text-(--ice-text-content) mt-3 md:mt-4 max-w-md md:max-w-2xl mx-auto">See what our happy customers are saying about their experience with the Cream and Ice family</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-3">
                    {
                        reviews.map((review) => {
                            const options = { year: 'numeric', month: 'short', day: 'numeric' };
                            return (
                                <ReviewCard 
                                    key={`review-${review.id}`}
                                    rating={review.rating}
                                    reviewFrom={review.review_from}
                                    content={review.content}
                                    author={review.author}
                                    date={review.date.toLocaleDateString("en-UK", options)}
                                />
                            )
                        })
                    }
                </div>
                <div className="font-robo text-center text-sm text-(--ice-text-content)/50 font-medium mt-12">
                    <p className="">Thanks to all our customers for their amazing support!</p>
                    <p>Leave us a review on <a href="https://yelp.com" className="text-(--yelp-review) hover:underline">Yelp</a> or <a href="https://google.com" className="text-(--google-review) hover:underline">Google</a>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Reviews;