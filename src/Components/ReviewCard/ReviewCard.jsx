import Star from "../Star/Star";

const ReviewCard = ({ rating, reviewFrom, content, author, date }) => {
    let reviewFromStyles
    switch (reviewFrom) {
        case "Yelp": {
            reviewFromStyles = "bg-(--yelp-review)/10 text-(--yelp-review) px-2 py-1 text-xs font-bold rounded-sm"
            break
        }
        case "Google": {
            reviewFromStyles = "bg-(--google-review)/10 text-(--google-review) px-2 py-1 text-xs font-bold rounded-sm"
            break
        }
        default: {
            reviewFromStyles = "hidden"
        }
    }

    return (
        <div className="relative w-fit">
            <div className="peer absolute z-1 top-0 left-0 w-full h-full flex items-center justify-center font-robo font-bold hover:backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity peer-duration-300 over-hidden">
                <a href="" className="bg-(--ice-teal) text-white py-1 px-3 rounded-xl shadow-lg">Read Full Review</a>
            </div>
            <div className="font-robo bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-transform duration-300 ease-(--ice-timing-cb1) peer-hover:-translate-y-[0.5rem]">
                <div className="flex justify-between items-center mb-3">
                    <Star rating={rating} />
                    <span className={reviewFromStyles}>{reviewFrom}</span>
                </div>
                <p className="text-(--ice-text-content) px-2 text-sm font-medium">{content}</p>
                <div className="flex justify-between items-center my-3">
                    <span className="font-medium text-sm">{author}</span>
                    <span className="text-(--ice-text-content)/50 text-sm">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;

