import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

export default function HotelLayer({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}