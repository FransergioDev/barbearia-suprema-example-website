import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_components/navbar'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

import './globals.css'
import Footer from './_components/footer'

export const metadata: Metadata = {
  title: 'Barbearia Suprema - Exemplo',
  description: 'Barbearia Suprema - Site Exemplo feito com NextJS com Bootstrap 5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className} suppressHydrationWarning={true} >
        <div className='box-background'></div>
        <Navbar/>
        <div className='box-main'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
