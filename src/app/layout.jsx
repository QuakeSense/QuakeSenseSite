import { Merriweather } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-merriweather',
})

export const metadata = {
  title: {
    template: '%s - QuakeSense',
    default: 'QuakeSense - Global Earthquake Alerts',
  },
  description:
    'QuakeSense is a global earthquake app that provides real-time earthquake alerts and information.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', merriweather.variable)}>
      <body className="font-serif">{children}</body>
    </html>
  )
}