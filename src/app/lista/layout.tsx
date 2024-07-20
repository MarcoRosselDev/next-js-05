"use client"

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"
import styles from "./lista.module.css"
import { useContext } from "react"
import ThemeContext from "@/context/themeContext"
// en este layout deberia de preguntar al probeedor de estylos si esta en dark-mode
// use provider
// en caso de x mode aplicar un estilo global para el div

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  const {darkTheme, setDarkTheme} = useContext(ThemeContext)
  return (
    <div className={styles.lista_main}>
      <div>
        <p className="ml-2">{   darkTheme? (
        <MdOutlineLightMode   className="cursor-pointer"  onClick={()=>{
          setDarkTheme(false)
          localStorage.removeItem('hotel-theme')  }}/>)     :     (
            <MdDarkMode   className="cursor-pointer"      onClick={() =>{
            setDarkTheme(true)
            localStorage.setItem('hotel-theme', 'true') }}/>)}
        </p>
        <p>heste puede ser el header</p>
      </div>
      {children}
      <div>
        <p>heste puede ser el footer</p>
      </div>
    </div>
  )
}