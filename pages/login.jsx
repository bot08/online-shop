import Head from 'next/head'
import Link from 'next/link'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO fix login
    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
        username: e.target.name.value, // mor_2314
        password: e.target.password.value // 83r5^_
      })
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
  };

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
              Username
            </label>
            <input id="name" required type="text" placeholder="Username" className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-900 leading-tight focus:outline focus:shadow-outline"/>
          </div>
          {/* Password input */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2 ml-1">
              Password
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
