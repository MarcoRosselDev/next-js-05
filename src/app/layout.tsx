import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

//const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({subsets: ['latin'],
  weight: ['400', '500', '700','900'],
  style:['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <main className="font-normal">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
  /* return (
    <html lang="en">
      <body className={poppin.className}>{children}</body>
    </html>
  ); */
}
