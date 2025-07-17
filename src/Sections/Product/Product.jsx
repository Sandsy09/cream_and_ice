import ProductList from '../../Components/ProductList/ProductList'
import products from '../../../seeds'


const Product = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-ice-off-white" id='section-products'>
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
    </section>
  )
};

export default Product;