import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import dynamic from 'next/dynamic'

// Dynamically import the EarthquakeStats component with no SSR
const EarthquakeStats = dynamic(() => import('@/components/EarthquakeStats'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <EarthquakeStats />
      <Faqs />
    </>
  )
}
