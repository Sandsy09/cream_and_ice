const ProductModalContent = ({ productModalOpen, toggleProductModal }) => {
    return (
        <div className="fixed bg-black/70 h-full w-full inset-0 flex items-center justify-center z-50">
            <button onClick={toggleProductModal}>Close</button>
        </div>
    )
};

export default ProductModalContent;