const ProductsLoader = () => {
  let preloaders = [];

  for (let i = 0; i < 20; i++) {
    preloaders.push(
      <div key={i} className="m-4 p-3 h-64 md:h-80 bg-white shadow rounded-xl"></div>
    );
  }
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-4'>
      { preloaders }
    </div>
  )
}
  
export default ProductsLoader