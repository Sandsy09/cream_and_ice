import { createPortal } from 'react-dom';
import { CheckCircle, LucideX } from 'lucide-react'

const productModalRoot = document.getElementById('product-modal-root');

const ProductModal = ({ handleModalClose, product }) => {
    return (
        createPortal(
            <>
                <div className="font-robo fixed bg-black/60 h-full w-full inset-0 flex items-center justify-center z-10">
                    <div className="relative container h-[90vh] w-[90%] max-w-4xl px-8 py-12 bg-white rounded-xl z-50 overflow-y-auto overflow-hidden">
                        <div className="flex flex-col text-center sm:text-left">
                            <div className="flex items-center mb-2">
                                <div className="h-16 w-16 rounded-full shadow-2xl mr-2"></div>
                                <div className="">
                                    <h2 className='font-bold text-4xl mb-1'>{product.title}</h2>
                                    <span className='bg-(--ice-teal)/30 text-(--ice-teal) font-bold text-sm py-1 px-2 rounded-full'>{product.category}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[40vh] rounded-xl mt-4 overflow-hidden">
                            <img src={product.image} alt="" className='w-full h-full object-cover' />
                        </div>
                        <p className='mt-6 text-lg text-start text-(--ice-text-content)'>{product.short_description}</p>
                        <div className="bg-(--ice-yellow)/50 rounded-xl px-6 py-4 mt-8">
                            <h3 className='text-start font-bold text-xl'>About this Flavor</h3>
                            <p className='text-md text-start text-(--ice-text-content) my-3'>{product.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                                {
                                    product.product_facts.map((fact, idx) => {
                                        return (
                                            <p key={`fact-${idx}`} className='flex items-center text-md'><CheckCircle size={20} className='text-(--ice-teal) mr-2' /> {fact}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <p className='mt-5 text-lg text-(--ice-text-content) text-center'>Come down to one of our local shops and try today!</p>
                        <div className="flex justify-center items-center">
                            <button onClick={handleModalClose} className='mt-6 px-10 py-5 rounded-full bg-(--ice-red) hover:bg-(--ice-red)/70 transition-color duration-250 text-white text-lg font-medium cursor-pointer'>Back to All Flavors</button>
                        </div>
                        <button onClick={handleModalClose} className="absolute top-5 right-5 block cursor-pointer">
                            <LucideX size={30} className='text-black hover:text-(--ice-red) transition-color duration-150' />
                        </button>
                    </div>
                </div>
            </>
            , productModalRoot)
    )
};

export default ProductModal;