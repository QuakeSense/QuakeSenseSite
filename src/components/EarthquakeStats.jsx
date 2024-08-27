'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/Container'
import { CircleBackground } from '@/components/CircleBackground'

const EarthquakeStats = () => {
  const [earthquakeData, setEarthquakeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
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
    <section className="relative overflow-hidden bg-blue-600 py-20 sm:py-28">
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Earthquake Activity
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Stay informed about recent seismic events around the globe.
          </p>
          {isLoading && (
            <p className="mt-4 text-lg text-blue-100">Loading earthquake data...</p>
          )}
          {error && (
            <p className="mt-4 text-lg text-red-300">Error: {error}</p>
          )}
          {earthquakeData && (
            <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-white mb-4">
                Last 24 Hours Statistics
              </h3>
              <p className="text-3xl font-bold text-white mb-6">
                Total Earthquakes: {earthquakeData.total}
              </p>
              {earthquakeData.data[0] && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Latest Earthquake:</h4>
                  <ul className="text-blue-100">
                    <li>Location: {earthquakeData.data[0].location}</li>
                    <li>Magnitude: {earthquakeData.data[0].magnitude}</li>
                    <li>Time: {new Date(earthquakeData.data[0].time * 1000).toLocaleString()}</li>
                    <li>Depth: {earthquakeData.data[0].depth} km</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default EarthquakeStats;