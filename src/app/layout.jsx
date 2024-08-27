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
    default: 'QuakeSense - Global Earthquake Alerts iOS App',
  },
  description:
    'QuakeSense is a swiftui native iOS app that provides global earthquake alerts. It uses the mutiple data sources to provide the most accurate and fastest alerts',
  keywords: ['QuakeSense', 'earthquake alert', 'quake alert', 'alert', 'swiftui', 'app'],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('bg-gray-50 antialiased', merriweather.variable)}
    >
      <body className="font-serif">{children}</body>
    </html>
  )
}
