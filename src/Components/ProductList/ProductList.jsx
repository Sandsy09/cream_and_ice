import ProductCard from "../ProductCard/ProductCard";


const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products.map((product, i) => {
                    return (
                        <ProductCard
                            key={`product-${i}`}
                            imageUrl={product.image}
                            title={product.title}
                            description={product.short_description}
                            category={product.category}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProductList;