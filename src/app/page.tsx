'use client'

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"
import { useContext } from "react";
import ThemeContext from "@/context/themeContext";
import Link from "next/link";

export default function Home() {
  const {darkTheme, setDarkTheme} = useContext(ThemeContext)

  return (
    <main>
      <div>
        <p className="ml-2">{   darkTheme? (
        <MdOutlineLightMode   className="cursor-pointer"  onClick={()=>{
          setDarkTheme(false)
          localStorage.removeItem('hotel-theme')  }}/>)     :     (
            <MdDarkMode   className="cursor-pointer"      onClick={() =>{
              setDarkTheme(true)
              localStorage.setItem('hotel-theme', 'true') }}/>)}
        </p>
        <p>en esta parte vendra un proyecto 3D con three js</p>
        <Link href='/hotel' >Hotel project</Link>
      </div>
    </main>
  );
}
