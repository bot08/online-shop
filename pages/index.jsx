import Head from 'next/head'
import CounterExample from '../components/counterExample'
import Products from '../components/indexPage/Products'

const Home = () => {
  return (
    <>
      <Head>
        <title>Online shop</title>
      </Head>
      <h2 className="mt-1 text-3xl text-gray-900 font-bold">Discover our products</h2>
      <Products/>
      <hr className="my-2 border-gray-300 dark:border-gray-500"/>
      <CounterExample/>
    </>
  )
}

export default Home
