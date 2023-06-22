import Link from "next/link";
import { useState } from "react";
import UserNav from "./UserNav"

const MobileNav = ({ navProps }) => {
  const [navOpen, setNav] = useState(false)

  const changeNav = () => {
    setNav(!navOpen)
  }

  return (
    <>
      <img onClick={changeNav} src={navOpen ? "/x-icon.svg" : "/burger-menu.svg"} className="h-8 w-8 cursor-pointer"/>
      {
        navOpen &&
        (
          <div className="fixed inset-0 z-20 mt-14 bg-white/50 backdrop-blur">
            <div className="bg-white mt-8 mx-4 py-2 rounded-xl shadow">
              {
                navProps.map(({ name, url }) => (
                  <Link href={url} onClick={changeNav} key={name.toString()} className="px-4 py-1 text-gray-900 text-xl font-semibold block">
                    { name }
                  </Link>
                ))
              }
              <div onClick={changeNav} className="flex justify-center items-center py-2">
                <UserNav/>
              </div>
            </div>
          </div>
        )
      } 
    </>
  )
}         


export default MobileNav