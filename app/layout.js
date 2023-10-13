import { Suspense } from 'react'
import { Roboto } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@styles/globals.css'
import Layout from '@components/Layout/Layout'
import Sidebar from '@components/Sidebar/Sidebar'
import Preloader from '@ui/Preloader/Preloader'

const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
export const metadata = {
  title: 'Home | Users',
  description: 'All users',
  icons: {
      icon: '/favicons/favicon-home.png'
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
      <Layout>
          <Sidebar />
          <main className='w-100 px-2 px-md-5 py-4 overflow-y-auto'>
              <Suspense fallback={<Preloader />}>
                  {children}
              </Suspense>
          </main>
      </Layout>
      </body>
    </html>
  )
}
