import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider'

const poppin = Poppins({subsets: ['latin'],
  weight: ['400', '500', '700','900'],
  style:['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover the best hotel rooms",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <ThemeProvider>
        <main className="font-normal">
          {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
