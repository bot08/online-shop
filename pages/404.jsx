import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div className='mx-auto max-w-sm p-4 my-4 bg-white rounded-lg shadow'>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          404
        </h1>
        <div className='flex justify-center'>
          <Link href='/' className="px-4 py-1 bg-green-600 text-white text-normal rounded-xl shadow">
            Back to home
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound