import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '../slices/userSlice'
import { useRouter } from 'next/router'

const Login = () => {
  const userToken = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        username: e.target.name.value, // mor_2314
        password: e.target.password.value // 83r5^_
      })
    })
    .then(res => res.json())
    .then(json => dispatch(setToken(json.token)))
  };

  const router = useRouter();

  // redirect when log in
  if (userToken) {
    router.push('/profile')
  }

  return (
    <>
      <Head>
        <title>Sign in - Online shop</title>
      </Head>
      <div className='mx-auto max-w-sm p-4 my-4 bg-white rounded-lg shadow'>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Sign in
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2 ml-1">
              Username  (mor_2314)
            </label>
            <input id="name" required type="text" placeholder="Username" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-900 leading-tight focus:outline focus:shadow-outline"/>
          </div>
          {/* Password input */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2 ml-1">
              Password  (83r5^_)
            </label>
            <input id="password" required type="password" placeholder="Password" autoComplete="true" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-900 leading-tight focus:outline focus:shadow-outline"/>
          </div>
          {/* Btn */}
          <button type="submit" className="px-4 py-1 bg-green-600 text-white text-normal rounded-xl shadow">
            Sign in
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
