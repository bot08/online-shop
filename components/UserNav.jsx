import Link from "next/link";
import { useSelector } from 'react-redux'

const UserNav = () => {
  const userToken = useSelector((state) => state.user.token)

  return (
    userToken ? 
    (
      <>
        <Link href="/cart" className="px-4 py-1 mr-4 bg-green-600 text-white text-normal rounded-xl shadow">
          Cart
        </Link>
        <Link href="/profile" className="px-4 py-1 bg-green-600 text-white text-normal rounded-xl shadow">
          Profile
        </Link>
      </>
    ) :
    (
      <>
        <Link href="/login" className="px-4 py-1 mr-4 bg-green-600 text-white text-normal rounded-xl shadow">
          Sign in
        </Link>
        <Link href="/register" className="px-4 py-1 bg-green-600 text-white text-normal rounded-xl shadow">
          Register
        </Link>
      </>
    )
  )
}         


export default UserNav