

const ProductCard = ({ productId, imageUrl, title, description, category, handleProductClick }) => {
    
    return (
        <div onClick={() => handleProductClick(productId)} className="z-1 bg-white overflow-hidden rounded-xl shadow-md hover-lift cursor-pointer">
            <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover hover:scale-125 duration-300" src={imageUrl} alt={title} />
            </div>
            <div className="p-6 font-robo">
                <h4 className="font-bold text-xl mb-3">{title}</h4>
                <p className="text-content mb-4">{description}</p>
                <div className="flex justify-start items-center">
                    <span className="bg-soft-teal text-ice-teal font-bold text-sm py-1 px-2 rounded-full">{category}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;