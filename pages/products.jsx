import Head from 'next/head'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Products - Online shop</title>
      </Head>
      <h2 className="mt-1 text-3xl text-gray-900 font-bold">TODO: Discover our products</h2>
      <Link href='/' className="px-4 py-1 bg-green-600 text-white text-normal rounded-xl shadow">
        Back to home
      </Link>
    </>
  )
}

export default ProductsPage
