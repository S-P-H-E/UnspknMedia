import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unspkn Media',
  description: 'Unspkn Media a short form Agency.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>{children}</body>
    </html>
  )
}
