import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <div className='w-full'>
            <Navbar/>
          </div>
          <main className='flex-1'>
            {children}
          </main>
          <div>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
