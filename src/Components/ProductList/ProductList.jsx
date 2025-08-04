import ProductCard from "../ProductCard/ProductCard";

//toggleProductModal, getProductModalContent
const ProductList = ({ products, gridCols = 3, handleProductClick, productModalOpen }) => {
    const gridLayout = (gridCols === 3)
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8"


    return (
        <div className={gridLayout}>
            {products.map((product, idx) => (
                <ProductCard
                    key={`product-${idx}`}
                    productId={product.id}
                    imageUrl={product.image}
                    title={product.title}
                    description={product.short_description}
                    category={product.category}
                    handleProductClick={handleProductClick}
                    //getProductModalContent={getProductModalContent}
                    //onClick={() => handleProductClick(idx)}
                />
            ))}
        </div>
    )
}

export default ProductList;