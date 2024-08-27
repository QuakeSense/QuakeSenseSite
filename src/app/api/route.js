import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const since = searchParams.get('since');

  if (!since) {
    return NextResponse.json({ error: 'Since parameter is required' }, { status: 400 });
  }

  const url = `https://earthquakes.quakesense.app/?page=1&page_size=1&since=${since}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch earthquake data');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching earthquake data' }, { status: 500 });
  }
}