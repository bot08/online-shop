import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
import NotFound from '../404'

export default function productPage() {
  const router = useRouter()
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/${router.query.id}`, fetcher)
 
  if (error) return <NotFound/>
  if (isLoading) return <div>Loading</div>


  return (
    <div className='grid md:grid-cols-2'>
      {/* Image */}
      <div>
        <img src={data.image} alt='' className='h-60 lg:h-96 m-4 mx-auto rounded-xl'/>
      </div>
      {/* block */}
      <div className=' m-4 p-3 bg-white shadow rounded-xl'>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h2>
        <p className='text-base text-gray-900'>{ data.description }</p>
        <p className='text-base text-gray-900'>{ data.description }</p>
        <h3 className='text-right text-base text-green-600'>{ data.category }</h3>
        <hr className="my-2 border-gray-300 dark:border-gray-500"/>
        <div className='flex justify-between'>
          <Link href="/cart" className="px-4 py-1 mr-4 bg-green-600 text-white text-normal rounded-xl shadow">
            Buy
          </Link>
          <h4 className='text-right text-green-600 text-xl font-bold'>{ data.price }$</h4>
        </div>
      </div>
    </div>
  )
}