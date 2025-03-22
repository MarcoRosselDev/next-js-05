"use client"

import { useTheme } from "next-themes"

export default function ModeToggle() {
  const { setTheme } = useTheme()
  console.log(setTheme);
 
  return (
    <>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("system")}>system</button>
    </>
  )
}