import Head from 'next/head'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Online shop</title>
      </Head>
      <h2 className="mt-1 text-3xl text-gray-900 font-bold">TODO: Contact page</h2>
      <Link href='/' className="px-4 py-1 bg-green-600 text-white text-normal rounded-xl shadow">
        Back to home
      </Link>
    </>
  )
}

export default ContactPage