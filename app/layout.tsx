import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alotech Cansat',
  description: 'Website about Alotech cansat ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <nav>
          <a href="#welcome_section">main</a>
          |
          <a href="#about-us">about us</a>
          |
          <a href="#our-cansat">our cansat</a>
          |
          <a href="#contact">contact</a>
          

        </nav>
        {children}</body>
    </html>
  )
}
