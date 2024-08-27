'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/Container'
import { CircleBackground } from '@/components/CircleBackground'

const EarthquakeStats = () => {
  const [earthquakeData, setEarthquakeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      if (fetchedRef.current) return; // 如果已经发出请求，则直接返回
      fetchedRef.current = true; // 标记已发出请求

      const twentyFourHoursAgo = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
      const url = `/api?since=${twentyFourHoursAgo}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch earthquake data');
        }
        const data = await response.json();
        setEarthquakeData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEarthquakeData();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 to-yellow-100 py-20 sm:py-28">
      <div className="bg-grid-white/[0.05] bg-grid-16 absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="absolute inset-0">
        <CircleBackground
          color="#fff"
          className="absolute -left-[50%] -top-[50%] h-[200%] w-[200%] animate-spin-slower"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Global Seismic Activity
          </h2>
          <p className="mt-4 text-xl text-gray-900">
            Real-time insights into Earth tectonic movements
          </p>
          {isLoading && (
            <div className="mt-10 flex justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
            </div>
          )}
          {error && (
            <p className="mt-10 rounded-lg bg-red-900/20 p-4 text-lg text-gray-900">
              {error}
            </p>
          )}
          {earthquakeData && (
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Last 24 Hours
                </h3>
                <p className="mb-2 text-6xl font-bold text-gray-900">
                  {earthquakeData.total}
                </p>
                <p className="text-xl text-gray-900">Total Earthquakes</p>
              </div>
              {earthquakeData.data[0] && (
                <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    Latest Event
                  </h3>
                  <div className="space-y-2 text-left">
                    <p className="flex justify-center">
                      <span className="truncate font-medium text-gray-900">
                        {earthquakeData.data[0].location}
                      </span>
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
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default EarthquakeStats
