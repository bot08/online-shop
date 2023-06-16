import useSWR from 'swr'
import Link from 'next/link'
import ProductsLoader from './ProductsLoader'

const Products = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher)
 
  if (error) return <div>Error</div>
  if (isLoading) return <ProductsLoader/>

  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-4'>
      {
        data.map(({ id, title, price, category, description, image }) => (
          <div key={id.toString()} className='m-4 p-3 bg-white shadow rounded-xl'>
            <Link href={`/products/${id}`}>
              <img src={image} className='mb-3 mx-auto h-32 md:h-40' alt=''/>
              <h3 className='text-lx text-gray-900 font-semibold'>{ title }</h3>
              <hr className="my-2 border-gray-300"/>
              {/* <h3 className='text-base text-gray-900 truncate'>{ description }</h3> */}
              <h4 className='text-right text-green-600 text-sm font-bold'>{ price }$</h4>
              <h3 className='text-right text-base text-gray-900'>{ category }</h3>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Products