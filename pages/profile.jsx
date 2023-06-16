import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { deleteToken } from '../slices/userSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Login = () => {
  const userToken = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(deleteToken());
  }

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
        <title>Your profile - Online shop</title>
      </Head>
      <div className='mx-auto max-w-sm p-4 my-4 bg-white rounded-lg shadow'>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Profile page
        </h1>
        {/* DEBUG */}
        <div className="truncate">{ userToken == null ? 'null' : userToken }</div>
        {/* Btn */}
        <button onClick={ logOut } className="px-4 py-1 mt-2 bg-green-600 text-white text-normal rounded-xl shadow">
          Log out
        </button>
      </div>
    </>
  )
}

export default Login
