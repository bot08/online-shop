import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import UserNav from "./UserNav"

const nav = [
  { name: 'Home', url: '/'},
  { name: 'Products', url: '/products'},
  { name: 'Contact', url: '/contact'},
]

const Navbar = () => {
  return (
    <div className="fixed top-0 z-30">
      <div className="w-screen py-3 px-4 xl:px-8 bg-white shadow">
        <div className="flex sm:flex-row justify-between container mx-auto">
          {/* Left */}
          <div className="flex justify-center items-center">
            <Link href="/">
              <img src="/logo.svg" className="h-8 w-8 mr-4" alt="logo"/>
              <span className="sr-only">Logo</span>
            </Link>
            {
              nav.map(({ name, url }) => (
                <Link href={url} key={name.toString()} className="px-4 hidden md:block text-gray-900 text-lg font-semibold">
                  { name }
                </Link>
              ))
            }
          </div>
          {/* Right */}
          <div className="flex justify-center items-center">
            <UserNav/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar


/*
const Header = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <>
      { mounted ? (
          <select value={theme} onChange={e => setTheme(e.target.value)} className="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        ) : (
          <select className="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"/>
        )
      }
      <button onClick={() => setTheme('dark')} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">Dark</button>
      <button onClick={() => setTheme('light')} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">Light</button>
      {/* <button onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">Switch</button> }
      <hr className="mb-2 border-gray-300 dark:border-gray-500"/>
    </>
  )
}
*/