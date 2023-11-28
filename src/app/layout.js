// import { Inter } from 'next/font/google'

import './globals.css'
import { ThemeContext, ThemeProvider } from '@/context/themProvider'
import Navbar from "@/components/navbar/page"
import Footer from "@/components/footer/page"




export const metadata = {
  title: 'Awsome Blogs',
  description: 'This is Awesome Blogs',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body  >
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>

        </ThemeProvider >

      </body>




    </html>
  )
}
