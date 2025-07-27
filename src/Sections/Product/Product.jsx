import ProductList from '../../Components/ProductList/ProductList'
import products from '../../../seeds/products'


const Product = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-(--ice-off-white)" id='section-products'>
      <div className="absolute bg-soft-red h-32 w-32 rounded-full -top-10 -left-10 z-0"></div>
      <div className="absolute bg-soft-yellow h-64 w-64 rounded-full -bottom-15 -right-15 z-0"></div>
      <div className='container mx-auto max-w-6xl'>
        <div className="text-center mb-12">
          <h2 className='text-3xl md:text-5xl font-robo font-bold mb-4'><span className='font-cursive text-ice-teal'>Frozen</span> Flavors</h2>
          <p className='text-content text-lg text-center max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod id eveniet tempora, odio delectus.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button className="bg-teal text-white rounded-full px-4 py-2 shadow-md">Rich & Indulgent</button>
          <button className="bg-teal text-white rounded-full px-4 py-2 shadow-md">Spiced & Surprising</button>
          <button className="bg-teal text-white rounded-full px-4 py-2 shadow-md">Wacky & Wonderful</button>
        </div>
        <ProductList products={products} />
      </div>
      <div className="text-center mt-12">
        <a href="/flavors">
          <button className='inline-flex gap-2 items-center justify-center mx-auto space-between font-robo font-medium bg-(--ice-teal) text-white py-2 px-5 md:px-7 rounded-lg cursor-pointer hover:bg-white border-2 border-transparent hover:border-(--ice-teal) hover:text-(--ice-teal) transition-color duration-250'>
            <span>View all our flavors</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </section>
  )
};

export default Product;