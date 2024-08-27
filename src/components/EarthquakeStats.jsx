'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/Container'
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Marker,
} from 'react-leaflet'
import L from 'leaflet'

const EarthquakeStats = () => {
  const [earthquakeData, setEarthquakeData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [animatedTotal, setAnimatedTotal] = useState(0)
  const fetchedRef = useRef(false)

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      if (fetchedRef.current) return
      fetchedRef.current = true

      const twentyFourHoursAgo = Math.floor(Date.now() / 1000) - 24 * 60 * 60
      const url = `/api?since=${twentyFourHoursAgo}`

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch earthquake data')
        }
        const data = await response.json()
        setEarthquakeData(data)
        animateTotal(data.total)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEarthquakeData()
  }, [])

  const animateTotal = (total) => {
    let start = 0
    const duration = 2000 // 2 seconds
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setAnimatedTotal(Math.floor(progress * total))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  const EarthquakeMarker = ({ earthquake }) => {
    const [opacity, setOpacity] = useState(0.8)
    const [radius, setRadius] = useState(Math.pow(2, earthquake.magnitude) * 2)

    useEffect(() => {
      const interval = setInterval(() => {
        setOpacity((prevOpacity) => (prevOpacity > 0 ? prevOpacity - 0.1 : 0.8))
        setRadius((prevRadius) =>
          prevRadius < 100
            ? prevRadius + 1
            : Math.pow(2, earthquake.magnitude) * 2,
        )
      }, 100)

      return () => clearInterval(interval)
    }, [earthquake.magnitude])

    const customIcon = L.icon({
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      iconSize: [15, 25],
      popupAnchor: [1, -34],
    })

    return (
      <>
        <CircleMarker
          center={[earthquake.latitude, earthquake.longitude]}
          radius={radius}
          color="red"
          weight={2}
          fillOpacity={0}
          opacity={opacity}
        />
        <Marker
          position={[earthquake.latitude, earthquake.longitude]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{earthquake.location}</h3>
              <p>Magnitude: {earthquake.magnitude}</p>
              <p>Depth: {earthquake.depth} km</p>
              <p>Time: {new Date(earthquake.time * 1000).toLocaleString()}</p>
            </div>
          </Popup>
        </Marker>
      </>
    )
  }

  const MapComponent = ({ earthquakeData }) => {
    const { latitude, longitude } = earthquakeData.data[0]
    return (
      <MapContainer
        center={[latitude, longitude]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        key={earthquakeData ? earthquakeData.total : 'loading'}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {earthquakeData &&
          earthquakeData.data.map((earthquake) => (
            <EarthquakeMarker key={earthquake.id} earthquake={earthquake} />
          ))}
      </MapContainer>
    )
  }

  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-br py-20 sm:py-28">
      <div className="bg-grid-gray/[0.05] bg-grid-16 absolute inset-0 [mask-image:radial-gradient(gray,transparent_70%)]" />
      <Container className="relative">
        <div className="mx-auto max-w-7xl">
          {/* <h2 className="mb-10 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Global Seismic Activity
          </h2>
          <p className="mb-10 mt-4 text-center text-xl text-gray-900">
            Real-time insights into Earth tectonic movements
          </p> */}
          {isLoading && (
            <div className="flex justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-transparent"></div>
            </div>
          )}
          {error && (
            <p className="rounded-lg bg-red-900/20 p-4 text-lg text-gray-900">
              {error}
            </p>
          )}
          {earthquakeData && (
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="flex h-[500px] flex-col justify-between lg:w-1/3">
                <div className="rounded-2xl border border-gray-200 p-8 backdrop-blur-sm">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    Last 24 Hours
                  </h3>
                  <p className="mb-2 text-6xl font-bold text-gray-900">
                    {animatedTotal}
                  </p>
                  <p className="text-xl text-gray-900">Total Earthquakes</p>
                </div>
                {earthquakeData.data[0] && (
                  <div className="rounded-2xl border border-gray-200 p-8 backdrop-blur-sm">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                      Latest Event
                    </h3>
                    <div className="space-y-2">
                      <p className="truncate font-medium text-gray-900">
                        {earthquakeData.data[0].location}
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-900">Magnitude:</span>
                        <span className="font-medium text-gray-900">
                          {earthquakeData.data[0].magnitude}
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-900">Time:</span>
                        <span className="font-medium text-gray-900">
                          {new Date(
                            earthquakeData.data[0].time * 1000,
                          ).toLocaleString()}
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-900">Depth:</span>
                        <span className="font-medium text-gray-900">
                          {earthquakeData.data[0].depth} km
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-900">Data Souce:</span>
                        <span className="font-medium text-gray-900">
                          {earthquakeData.data[0].source}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="h-[500px] overflow-hidden rounded-lg lg:w-2/3">
                <MapComponent earthquakeData={earthquakeData} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default EarthquakeStats
