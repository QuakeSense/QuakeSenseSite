import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/Container'
import { CircleBackground } from '@/components/CircleBackground'
import { Globe2, Activity, Clock, Ruler } from 'lucide-react';

const EarthquakeStats = () => {
  const [earthquakeData, setEarthquakeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      if (fetchedRef.current) return;
      fetchedRef.current = true;

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
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-600 to-yellow-500 py-20 sm:py-28">
      <div className="bg-grid-white/[0.05] bg-grid-16 absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="absolute inset-0">
        <CircleBackground
          color="#fff"
          className="absolute -left-[50%] -top-[50%] h-[200%] w-[200%] animate-spin-slower"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <Globe2 className="inline-block mr-2 mb-1" /> Global Seismic Activity
          </h2>
          <p className="mt-4 text-xl text-yellow-100">
            Real-time insights into Earth's tectonic movements
          </p>
          {isLoading && (
            <div className="mt-10 flex justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
            </div>
          )}
          {error && (
            <p className="mt-10 rounded-lg bg-red-900/20 p-4 text-lg text-red-300">
              Error: {error}
            </p>
          )}
          {earthquakeData && (
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  <Clock className="inline-block mr-2 mb-1" /> Last 24 Hours
                </h3>
                <p className="mb-2 text-6xl font-bold text-white">
                  {earthquakeData.total}
                </p>
                <p className="text-xl text-white">Total Earthquakes</p>
              </div>
              {earthquakeData.data[0] && (
                <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    <Activity className="inline-block mr-2 mb-1" /> Latest Event
                  </h3>
                  <div className="space-y-2 text-left">
                    <p className="flex justify-between">
                      <span className="text-white">
                        <Globe2 className="inline-block mr-1 mb-1" /> Location:
                      </span>
                      <span className="font-medium text-white">
                        {earthquakeData.data[0].location}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-white">
                        <Activity className="inline-block mr-1 mb-1" /> Magnitude:
                      </span>
                      <span className="font-medium text-white">
                        {earthquakeData.data[0].magnitude}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-white">
                        <Clock className="inline-block mr-1 mb-1" /> Time:
                      </span>
                      <span className="font-medium text-white">
                        {new Date(
                          earthquakeData.data[0].time * 1000,
                        ).toLocaleString()}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-white">
                        <Ruler className="inline-block mr-1 mb-1" /> Depth:
                      </span>
                      <span className="font-medium text-white">
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