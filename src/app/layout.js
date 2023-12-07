// import { Inter } from 'next/font/google'

"use client "
import './globals.css'
import { ThemeContext, ThemeProvider } from '@/context/themProvider'
import Navbar from "@/components/navbar/page"
import Footer from '@/components/footer/page'
import Provider from '@/components/AuthProvider/provider'
import Providers from './providers'



// the SessionProvider is a use client page and the metadata is a server side page, so , the use seesion will be created In a component and be imported in the layout.js file"
// export const metadata = {
//   title: 'Awsome Blogs',
//   description: 'This is Awesome Blogs',
// }

// to use next-auth js session in our apllication, we need to pass the session in our top level application
// but becuase we are using metadat on this , using sessionn which is a client component, it cant be o the same page as meta data 
// because metadata is a server component
export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body  >
        <ThemeProvider>



          <Providers>


            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>


          </Providers>
        </ThemeProvider >

      </body>




    </html>
  )
}
