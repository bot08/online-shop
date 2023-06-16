import Head from 'next/head'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const CardPage = () => {
  const userToken = useSelector((state) => state.user.token)

  const router = useRouter();
  
  // login when not log in
  useEffect(() => {
    if (!userToken) {
      router.push('/login');
    }
  }, [userToken]);

  return (
    <>
      <Head>
        <title>Card - Online shop</title>
      </Head>
      <h2 className="mt-1 text-3xl text-gray-900 font-bold">TODO: Card (possibly make it a dropdown menu from the top, but it requires understanding what the API allows)</h2>
    </>
  )
}

export default CardPage